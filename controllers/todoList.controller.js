const { TodoLists, Users } = require('../models');

const createTodoList = async(req, res) => {
    const { title, from, to, userId } = req.body;
    try {
        const listTodos = await TodoLists.findAll();
        const todoFilter = listTodos.find((todo) => todo.title === title)
        if (!todoFilter) {
            const newTodo = await TodoLists.create({ title, from, to, userId });
            res.status(201).send(newTodo)
        } else {
            res.status(500).send({ message: 'Todo đã tồn tại!' })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const getAllTodoList = async(req, res) => {
    try {
        const listTodos = await TodoLists.findAll({
            include: [{
                model: Users
            }]
        });
        res.status(200).send(listTodos)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getTodoById = async(req, res) => {
    const { id } = req.params;
    try {
        const todoList = await TodoLists.findOne({
            include: [{
                model: Users
            }],
            where: {
                id
            }
        })
        if (todoList) {
            res.status(200).send(todoList)
        } else {
            res.status(404).send({ message: "Không tìm thấy todolist" })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const editTodo = async(req, res) => {
    const { id } = req.params;
    const { title, from, to, type } = req.body;
    try {
        const todoList = await TodoLists.findOne({
            where: {
                id
            }
        })
        if (todoList) {
            todoList.title = title;
            todoList.from = from;
            todoList.to = to;
            todoList.type = type;
            await todoList.save();
            res.status(200).send(todoList)
        } else {
            res.status(404).send({ message: "Không tìm thấy todolist" })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteTodo = async(req, res) => {
    const { id } = req.params;
    try {
        const todoDelete = await TodoLists.findOne({
            where: {
                id
            }
        });
        if (todoDelete) {
            await TodoLists.destroy({
                where: {
                    id
                }
            });
            res.status(200).send({ message: "Xoá thành công" })
        } else {
            res.status(404).send({ message: "Không tìm thấy todolist" })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports = {
    createTodoList,
    getAllTodoList,
    getTodoById,
    editTodo,
    deleteTodo
}