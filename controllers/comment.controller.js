const { Comments } = require('../models');

const createComment = async(req, res) => {
    const { name, email, comment } = req.body;
    try {
        const newComment = await Comments.create({ name, email, comment });
        if (newComment) {
            res.status(201).send(newComment)
        } else {
            res.status(404).send({ message: 'Not found comment!' })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const getAllComments = async(req, res) => {
    try {
        const listComments = await Comments.findAll();
        if (listComments) {
            res.status(200).send(listComments)
        } else {
            res.status(404).send({ message: 'Not found comment!' })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const getDetailComment = async(req, res) => {
    const { id } = req.params;
    try {
        const comment = await Comments.findOne({
            where: {
                id
            }
        })
        if (comment) {
            res.status(200).send(comment)
        } else {
            res.status(404).send({ message: 'Not found comment!' })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const editComment = async(req, res) => {
    const { id } = req.params;
    const { name, email, comment } = req.body;
    try {
        const commentEdit = await Comments.findOne({
            where: {
                id
            }
        })
        if (commentEdit) {
            commentEdit.name = name;
            commentEdit.email = email;
            commentEdit.comment = comment;
            await commentEdit.save();
            res.status(200).send(commentEdit)
        } else {
            res.status(404).send({ message: 'Not found comment!' })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteComment = async(req, res) => {
    const { id } = req.params;
    try {
        const comment = await Comments.findOne({
            where: {
                id
            }
        })
        if (comment) {
            await Comments.destroy({
                where: {
                    id
                }
            })
            res.status(200).send({ message: 'Delete comment successfully!' })
        } else {
            res.status(404).send({ message: 'Not found comment!' })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    createComment,
    getAllComments,
    getDetailComment,
    editComment,
    deleteComment
}