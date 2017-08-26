$(() => {
    const contentDiv = $('#content');
    loadCreatedPosts();

    (() => {
        $('#menu').find('a[data-target]').click(navigateTo);

        $('#registerForm').submit(registerUser);
        $('#loginForm').submit(loginUser);
        $('#linkMenuLogout').click(logoutUser);

        $('#btnSubmitPost').click(createPost);
        $('#viewMyPosts').click(() =>{
            $('#viewCatalog').hide();
        });
        // $('#viewCatalog').click(loadCreatedPosts);

        $('.notification').click(function () {
            $(this).hide();
        })
    })();


    if (sessionStorage.getItem('authtoken') === null) {
        userLoggedOut();
    } else {
        userLoggedIn();
    }


    // Create posts
    // TODO HTTP
    function createPost(ev) {
        ev.preventDefault();
        let form = $('#submitForm');
        let url = form.find('input[name="url"]').val();
        let title = form.find('input[name="title"]').val();
        let imageUrl = form.find('input[name="image"]').val();
        let comment = form.find('textarea[name="comment"]').val();

        let author = sessionStorage.getItem('username');

        if (!url.match('^http')) {
            showError('URL should start with "http"');
            return;
        }

        if (title.length === 0) {
            showError('Title cannot be empty');
            return;
        }

        if (url.length === 0) {
            showError('URL cannot be empty');
            return;
        }




        postsService.sendPost(url, title, imageUrl, comment, author)
            .then(() => {
                showInfo('Post created');
                showView('Catalog');
                loadCreatedPosts();
            }).catch(handleError);
    }

    function loadCreatedPosts() {
        postsService.loadPosts()
            .then((myPosts) => {
                displayCreatedPosts(myPosts);
            }).catch(handleError);
    }

    function displayCreatedPosts(myPosts) {
        // console.log('displayed posts');
        $('.posts').empty();
        if ($('.posts').length === 0) {
            $('.posts').append('<p>No posts in database</p>');
            return;
        }
        let counter = 1;
        for (let post of myPosts) {

            // console.log(post);
            let article = $('<article class="post">');
            let colRank = $('<div class="col rank">');
            let colThumbnail = $('<div class="col thumbnail">');
            let postContent = $('<div class="post-content">');

            let comments = $(`<a class="commentsLink" href="#">comments</a>`).click(() => displayPost(post._id));
            let edit = $(`<a class="editLink" href="#" data-target="Edit">edit</a>`).click(() => openEditPost(post._id));
            let deleteP = $(`<a class="deleteLink" href="#">delete</a>`).click(() => deletePost(post._id));

            let actionLi = $('<li class="action">');


            colRank.append($(`<span>${counter}</span>`));
            article.append(colRank);

            colThumbnail.append($(`<a href="${post.url}"><img src="${post.imageUrl}"></a>`));
            article.append(colThumbnail);

            postContent.append($(`<div class="title">`).append(`<a href="${post.url}">${post.title}</a>`));
            postContent.append($(`<div class="details>">`)
                .append($(`<div class="info">submitted ${calcTime(post._kmd.ect)} ago by ${post.author}</div>`))
                .append($(`<div class="controls">`)
                    .append($('<ul>')
                        .append($(actionLi)
                            ))));
            actionLi.append(comments);

            // actionLi.append(edit);
            // actionLi.append(deleteP);
            if (post._acl.creator === sessionStorage.getItem('userId')){
                actionLi.append(edit);
                actionLi.append(deleteP)
            }

            article.append(postContent);
            $('.posts').append(article);

            counter++;
        }

    }

    function displayPost(post) {
        showView('Comments')
    }

    function deletePost(postId) {

        requester.remove('appdata', `posts/${postId}`, 'kinvey')
            .then(() => {
                showInfo('Post deleted.');
                loadCreatedPosts()
            }).catch(handleError);

    }

    function openEditPost(postId) {
        console.log(postId);
        requester.get('appdata', 'posts/' + postId)
            .then((postId) => {
                let form = $('#editPostForm');
                form.find('input[name="url"]').val(postId.url);
                form.find('input[name="title"]').val(postId.title);
                form.find('input[name="image"]').val(postId.imageUrl);
                form.find('textarea[name="comment"]').val(postId.comment);

                // let id = post.id;
                // let author = post.author;

                form.find('#btnEditPost').click((postId) => editPost(postId));
                showView('Edit');
            })

    }

    function editPost(postId) {
        console.log(postId);
        let form = $('#submitForm');
        let url = form.find('input[name="url"]').val();
        let title = form.find('input[name="title"]').val();
        let imageUrl = form.find('input[name="image"]').val();
        let comment = form.find('textarea[name="comment"]').val();

        // let author = sessionStorage.getItem('username');

        if (!url.match('^http')) {
            showError('URL should start with "http"');
            return;
        }

        if (title.length === 0) {
            showError('Title cannot be empty');
            return;
        }

        if (url.length === 0) {
            showError('URL cannot be empty');
            return;
        }


        let editedPost = {url, title, imageUrl, comment};

        requester.update('appdata', 'posts/' + postId,  editedPost)
            .then(() => {
                showInfo(`Post ${title} edited`);
                showView('Catalog');
                loadCreatedPosts();
            }).catch(handleError);
    }

    function calcTime(dateIsoFormat) {
        let diff = new Date - (new Date(dateIsoFormat));
        diff = Math.floor(diff / 60000);
        if (diff < 1) return 'less than a minute';
        if (diff < 60) return diff + ' minute' + pluralize(diff);
        diff = Math.floor(diff / 60);
        if (diff < 24) return diff + ' hour' + pluralize(diff);
        diff = Math.floor(diff / 24);
        if (diff < 30) return diff + ' day' + pluralize(diff);
        diff = Math.floor(diff / 30);
        if (diff < 12) return diff + ' month' + pluralize(diff);
        diff = Math.floor(diff / 12);
        return diff + ' year' + pluralize(diff);
        function pluralize(value) {
            if (value !== 1) return 's';
            else return '';
        }
    }


    // Shows one view/section at a time
    function showView(viewName) {
        $('#container section').hide();
        $('#view' + viewName).show();
    }

    function navigateTo() {
        let viewName = $(this).attr('data-target');
        showView(viewName);
        // loadCreatedPosts();
    }

    function saveSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authtoken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let username = userInfo.username;
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('name', userInfo['name']);
        userLoggedIn();
    }

    // LOGIC TO LOGOUT USER
    function logoutUser() {
        auth.logout()
            .then(() => {
                sessionStorage.clear();
                showInfo('Logout successful.');
                userLoggedOut();
            }).catch(handleError);
    }

    // LOGIC TO LOGIN USER
    function loginUser(ev) {
        ev.preventDefault();
        let inputUsername = $('#loginUsername');
        let inputPassword = $('#loginPasswd');

        let usernameVal = inputUsername.val();
        let passwdVal = inputPassword.val();

        auth.login(usernameVal, passwdVal)
            .then((userInfo) => {
                saveSession(userInfo);
                inputUsername.val('');
                inputPassword.val('');
                $('#registerUsername').val('');
                $('#registerPasswd').val('');
                $('#registerRepeatPassword').val('');
                showInfo('Login successful.');
            }).catch(handleError);
    }

    // LOGIC TO REGISTER USER
    function registerUser(ev) {

        ev.preventDefault();
        let registerUsername = $('#registerUsername');
        let registerPassword = $('#registerPasswd');
        let registerRepeatPassword = $('#registerRepeatPassword');

        let usernameVal = registerUsername.val();
        let passVal = registerPassword.val();
        let repPassVal = registerRepeatPassword.val();

        if (usernameVal.length < 3) {
            showInfo('Username should be at least 3 symbols');
            return
        }

        if (passVal.length < 6) {
            showInfo('Password should be at least 6 symbols');
            return
        }

        if (passVal !== repPassVal) {
            showInfo('Passwords do not match');
            return
        }

        if (!passVal.match('^[a-zA-Z0-9_.-]*$')) {
            showInfo('Password should contain only alphanumeric symbols');
            return
        }

        auth.register(usernameVal, passVal, repPassVal)
            .then((userInfo) => {
                saveSession(userInfo);
                registerUsername.val("");
                registerPassword.val("");
                registerRepeatPassword.val("");
                showInfo('User registration successful.');
            }).catch(handleError);
    }


    // Logged in/out
    function userLoggedOut() {
        $('.anonymous').show();
        $('.useronly').hide();
        $('#spanMenuLoggedInUser').text('');
        showView('Welcome');
    }

    function userLoggedIn() {
        $('.anonymous').hide();
        $('.useronly').show();
        let username = sessionStorage.getItem('username');
        $('#spanMenuLoggedInUser').text(`Welcome, ${username}!`);
        showView('Catalog');
        loadCreatedPosts();
    }


    // Error handling
    function handleError(reason) {
        showError(reason.responseJSON.description);
    }

    function showInfo(message) {
        let infoBox = $('#infoBox');
        infoBox.text(message);
        infoBox.show();
        setTimeout(() => infoBox.fadeOut(), 3000);
    }

    function showError(message) {
        let errorBox = $('#errorBox');
        errorBox.text(message);
        errorBox.show();
        setTimeout(() => errorBox.fadeOut(), 3000);
    }

    // Handle notifications
    $(document).on({
        ajaxStart: () => $("#loadingBox").show(),
        ajaxStop: () => $('#loadingBox').fadeOut()
    });
});