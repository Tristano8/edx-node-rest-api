module.exports = {
    getComments(req, res) {
        res.status(200).send(store.posts[req.params.postId].comments); // Or should this return ALL comments?
    },
    addComment(req, res) {
        let newComment = req.body;
        let comments = req.store.posts[req.params.postId].comments
        let commentId = comments.length;
        comments.push(newComment);
        res.status(201).send({commentId: commentId});
    },
    updateComment(req, res) {
        let commentedPost = req.store.posts[req.params.postId]
        commentedPost.comments[req.params.commentId] = Object.assign(commentedPost.comments[req.params.commentId],req.body);
        res.status(200).send(commentedPost[req.params.commentId]);
    },
    removeComment(req, res) {
        req.store.posts[req.params.postId].comments.splice(req.params.commentId, 1);
        res.status(204).send();
    }
};