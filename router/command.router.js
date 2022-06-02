const express = require('express');
const { createCommand, getAllCommand, getDetailCommand, editCommand, deleteCommand } = require('../controllers/command.controller');
const { authenticate } = require('../middleware/authenticate');
const { authorize } = require('../middleware/authorize');
const { checkEmptyLibrary } = require('../middleware/validation');

const commandRouter = express.Router();

commandRouter.post('/create-command', authenticate, authorize(['SUPER_ADMIN']), checkEmptyLibrary, createCommand);
commandRouter.get('/get-all-command', getAllCommand)
commandRouter.get('/get-detail-command/:id', getDetailCommand)
commandRouter.put('/edit-command/:id', checkEmptyLibrary, editCommand)
commandRouter.delete('/delete-command/:id', deleteCommand)

module.exports = {
    commandRouter
}