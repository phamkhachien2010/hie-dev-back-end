const { Works, TodoLists } = require('../models')

const createWork = async(req, res) => {
    const { name, description, todoListId } = req.body;
    try {
        const listWorks = await Works.findAll();
        const listWorkFilter = listWorks.filter((work) => work.todoListId === todoListId)
        const workFilter = listWorkFilter.find((work) => work.name === name);
        if (!workFilter) {
            const newWork = await Works.create({ name, description, todoListId });
            res.status(201).send(newWork)
        } else {
            res.status(500).send({ message: 'Việc đã tồn tại' })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const getAllWork = async(req, res) => {
    try {
        const listWorks = await Works.findAll({
            include: [{
                model: TodoLists
            }]
        });
        res.status(200).send(listWorks)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getWorkDetail = async(req, res) => {
    const { id } = req.params;
    try {
        const work = await Works.findOne({
            include: [{
                model: TodoLists
            }],
            where: {
                id
            }
        })
        if (work) {
            res.status(200).send(work)
        } else {
            res.status(404).send({ message: 'Không tìm thấy works' })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const editWork = async(req, res) => {
    const { id } = req.params;
    const { name, description, type } = req.body
    try {
        const workEdit = await Works.findOne({
            where: {
                id
            }
        });
        if (workEdit) {
            workEdit.name = name;
            workEdit.description = description;
            workEdit.type = type
            await workEdit.save();
            res.status(200).send(workEdit)
        } else {
            res.status(404).send({ message: 'Không tìm thấy works' })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteWork = async(req, res) => {
    const { id } = req.params;
    try {
        const workDelete = await Works.findOne({
            where: {
                id
            }
        });
        if (workDelete) {
            await Works.destroy({
                where: {
                    id
                }
            });
            res.status(200).send({ message: "Xoá work thành công!" })
        } else {
            res.status(404).send({ message: 'Không tìm thấy works' })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports = {
    createWork,
    getAllWork,
    getWorkDetail,
    editWork,
    deleteWork
}