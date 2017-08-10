$(() => {
    setGreeting();

    // App constants
    const baseUrl = 'https://baas.kinvey.com/';
    const appKey = 'kid_S14toF4PZ';
    const appSecret = '1f87d4bddbcc44e0bb37fb931267e10c';


    $('#linkHome').click(() => showView('home'));
    $('#linkLogin').click(() => showView('login'));
    $('#linkRegister').click(() => showView('register'));
    $('#linkBooks').click(() => showView('books'));
    $('#linkCreateBook').click(() => showView('create'));
    $('#linkLogout').click(logout);

    $('#viewLogin').find('form').submit(login);
    $('#viewRegister').find('form').submit(register);
    $('#viewCreate').find('form').submit(createBook);

    $(document).on({
        ajaxStart: () => $('#loadingBox').show(),
        ajaxStop: () => $('#loadingBox').hide()
    });

    $('#infoBox').click((event) => $(event.target).hide());
    $('#errorBox').click((event) => $(event.target).hide());

    // Alert messages
    function showInfo(message) {
        $('#infoBox').text(message);
        $('#infoBox').show();
        setTimeout(() => $('#infoBox').fadeOut(), 3000);
    }

    function showError(message) {
        $('#errorBox').text(message);
        $('#errorBox').show();
    }

    function handleError(reason) {
        showError(reason.responseJSON.description + '!')
    }


    // Navigation and header
    function showView(name) {
        $('section').hide();

        switch (name) {
            case 'home':
                $('#viewHome').fadeIn(500).show();
                break;
            case 'login':
                $('#viewLogin').fadeIn(500).show();
                break;
            case 'register':
                $('#viewRegister').fadeIn(500).show();
                break;
            case 'books':
                getBooks();
                $('#viewBooks').fadeIn(500).show();
                break;
            case 'create':
                $('#viewCreate').fadeIn(500).show();
                break;
            case 'edit':
                $('#viewEdit').fadeIn(500).show();
                break;
            case 'logout':
                $('#viewLogout').fadeIn(500).show();
                break;

            default:
                break;

        }
    }

    function makeHeader(type) {
        if (type === 'basic') {
            return {
                'Authorization': 'Basic ' + btoa(appKey + ':' + appSecret),
                'Content-Type': 'application/json'
            }
        }
        else {
            return {
                'Authorization': 'Kinvey ' + localStorage.getItem('authtoken'),
                'Content-Type': 'application/json'
            }
        }

    }


    // User session
    function setGreeting() {
        let username = localStorage.getItem('username');
        if (username !== null) {
            $('#loggedInUser').text(`Welcome, ${username}!`);
            $('#linkLogin').hide();
            $('#linkRegister').hide();
            $('#linkBooks').show();
            $('#linkCreateBook').show();
            $('#linkLogout').show();
        }
        else {
            $('#loggedInUser').text('');
            $('#linkLogin').show();
            $('#linkRegister').show();
            $('#linkBooks').hide();
            $('#linkCreateBook').hide();
            $('#linkLogout').hide();
        }
    }

    function setStorage(data) {
        localStorage.setItem('authtoken', data._kmd.authtoken);
        localStorage.setItem('username', data.username);
        localStorage.setItem('userId', data._id);
        $('#loggedInUser').text(`Welcome, ${data.username}!`);

        showView('books');
        setGreeting();
    }

    function login(e) {
        e.preventDefault();
        console.log('Attempting login');
        let username = $('#inputUsername').val();
        let password = $('#inputPassword').val();

        let req = {
            url: baseUrl + 'user/' + appKey + '/login',
            method: 'POST',
            headers: makeHeader('basic'),
            data: JSON.stringify({
                username: username,
                password: password
            }),
            success: (data) => {
                showInfo('Login successful');
                setStorage(data)
            },
            error: handleError
        };

        $.ajax(req);
    }

    function register(e) {
        e.preventDefault();
        console.log('Attempting register');
        let username = $('#inputNewUsername').val();
        let password = $('#inputNewPassword').val();
        let repeat = $('#inputNewPassRepeat').val();

        if (password !== repeat) {
            showError('Passwords does not match');
            return;
        }

        let req = {
            url: baseUrl + 'user/' + appKey,
            method: 'POST',
            headers: makeHeader('basic'),
            data: JSON.stringify({
                username: username,
                password: password
            }),
            success: (data) => {
                showInfo('Registration successful');
                setStorage(data)
            },
            error: handleError
        };

        $.ajax(req);
    }

    function logout() {
        console.log('Attempting logout');
        let req = {
            url: baseUrl + 'user/' + appKey + '/_logout',
            method: 'POST',
            headers: makeHeader('kinvey'),
            success: logoutSuccess,
            error: handleError
        };

        $.ajax(req);

        function logoutSuccess(data) {
            localStorage.clear();
            setGreeting();
            showView('home');
        }
    }


    // Catalog
    function getBooks() {
        let tbody = $('#viewBooks').find('table').find('tbody');
        tbody.empty();

        let req = {
            url: baseUrl + 'appdata/' + appKey + '/books',
            headers: makeHeader('kinvey'),
            success: displayBooks,
            error: handleError
        };

        $.ajax(req);

        function displayBooks(data) {

            for (let book of data) {
                let actions = [];

                if (book._acl.creator === localStorage.getItem('userId')) {
                    actions.push($(`<button>&#9998;</button>`).click(() => editBook(book)));
                    actions.push($(`<button>&#10006;</button>`).click(() => deleteBook(book._id)));
                }
                
                let row = $('<tr>');
                row.append(`<td>${book.title}</td>`);
                row.append(`<td>${book.author}</td>`);
                row.append(`<td>${book.description}</td>`);
                row.append($(`<td>`).append(actions));
                row.appendTo(tbody);
            }
        }
    }

    function createBook() {
        let title = $('#inputNewTitle').val();
        let author = $('#inputNewAuthor').val();
        let description = $('#inputNewDescription').val();

        if (title.length === 0) {
            showError('Title cannot be empty');
            return;
        }

        if (author.length === 0) {
            showError('Author cannot be empty');
            return;
        }

        let req = {
            url: baseUrl + 'appdata/' + appKey + '/books',
            method: 'POST',
            headers: makeHeader('kinvey'),
            data: JSON.stringify({
                title,
                author,
                description
            }),
            success: createSuccess,
            error: handleError
        };

        $.ajax(req);

        function createSuccess(data) {
            $('#viewCreate').find('form').trigger('reset');
            showView('books')
        }
    }

    function deleteBook(id) {
        let req = {
            url: baseUrl + 'appdata/' + appKey + '/books/' + id,
            method: 'DELETE',
            headers: makeHeader('kinvey'),
            success: deleteSuccess,
            error: handleError
        };

        $.ajax(req);
        
        function deleteSuccess(data) {
            showInfo(`Book deleted`);
            showView('books')
        }
    }

    function editBook(book) {
        showView('edit');
        $('#inputTitle').val(book.title);
        $('#inputAuthor').val(book.author);
        $('#inputDescription').val(book.description);

        $('#viewEdit').find('form').submit(edit);

        function edit() {
            let editedBook = {
                title: $('#inputTitle').val(),
                author: $('#inputAuthor').val(),
                description: $('#inputDescription').val()
            };

            if (editedBook.title.length === 0) {
                showError('Title cannot be empty');
                return;
            }

            if (editedBook.author.length === 0) {
                showError('Author cannot be empty');
                return;
            }

            let req = {
                url: baseUrl + 'appdata/' + appKey + '/books/' + book._id,
                method: 'PUT',
                headers: makeHeader('kinvey'),
                data: JSON.stringify(editedBook),
                success: editSuccess,
                error: handleError
            };

            $.ajax(req);
            
            function editSuccess(data) {
                showInfo('Book edited');
                showView('books')
            }
        }
    }
});
