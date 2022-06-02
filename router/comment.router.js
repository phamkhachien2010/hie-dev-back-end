const express = require('express');
const { createComment, getAllComments, getDetailComment, editComment, deleteComment } = require('../controllers/comment.controller');
const { checkEmptyComment } = require('../middleware/validation');

const commentRouter = express.Router();

commentRouter.post('/send-comment', checkEmptyComment, createComment);
commentRouter.get('/get-all-comment', getAllComments);
commentRouter.get('/get-detail-comment/:id', getDetailComment);
commentRouter.put('/edit-comment/:id', checkEmptyComment, editComment);
commentRouter.delete('/delete-comment/:id', deleteComment);


module.exports = {
    commentRouter
}