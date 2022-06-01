const express = require('express');
const { todoListRouter } = require('./todoList.router');
const { userRouter } = require('./user.router');
const { workRouter } = require('./work.router');

const rootRouter = express.Router();

rootRouter.use('/users', userRouter);
rootRouter.use('/works', workRouter);
rootRouter.use('/todo', todoListRouter);

module.exports = {
    rootRouter
}