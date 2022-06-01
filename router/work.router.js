const express = require('express');
const { createWork, getAllWork, getWorkDetail, editWork, deleteWork } = require('../controllers/work.controller');
const { checkEmptyWork } = require('../middleware/validation');
const { authenticate } = require('../middleware/authenticate')


const workRouter = express();

workRouter.post('/create-work', authenticate, checkEmptyWork, createWork);
workRouter.get('/get-all-works', authenticate, getAllWork);
workRouter.get('/get-work-detail/:id', authenticate, getWorkDetail)
workRouter.put('/edit-work/:id', authenticate, checkEmptyWork, editWork)
workRouter.delete('/delete-work/:id', authenticate, deleteWork)

module.exports = {
    workRouter
}