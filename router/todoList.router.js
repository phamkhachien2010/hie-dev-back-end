const express = require('express');
const { createTodoList, getAllTodoList, getTodoById, editTodo, deleteTodo } = require('../controllers/todoList.controller');
const { authenticate } = require('../middleware/authenticate');
const { checkEmptyTodo } = require('../middleware/validation');

const todoListRouter = express();

todoListRouter.post('/create-todo', authenticate, checkEmptyTodo, createTodoList);
todoListRouter.get('/get-all-todo', authenticate, getAllTodoList)
todoListRouter.get('/get-todo-byId/:id', authenticate, getTodoById);
todoListRouter.put('/edit-todo/:id', authenticate, checkEmptyTodo, editTodo)
todoListRouter.delete('/delete-todo/:id', authenticate, deleteTodo)


module.exports = {
    todoListRouter
}