let postsService = (() => {

    function sendPost(url, title, imageUrl, comment,author) {
        let newPost = {
            url, title, imageUrl, comment, author
        };

        return requester.post('appdata', 'posts', 'kinvey', newPost);
    }

    function loadPosts() {
        let endpoint = `posts?query={}&sort={"_kmd.ect": -1}`;

        return requester.get('appdata', endpoint, 'kinvey');
    }

    function deletePost(postId) {
        let endpoint = `posts/${postId}`;

        return requester.remove('appdata', endpoint, 'kinvey');
    }

    return {
        sendPost,
        loadPosts
    }
})();