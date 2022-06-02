const express = require('express');
const { createLibraries, getAllLibraries, getDetailLibraries, editLibraries, deleteLibrary } = require('../controllers/libraries.controller');
const { authenticate } = require('../middleware/authenticate');
const { authorize } = require('../middleware/authorize');
const { checkEmptyLibrary } = require('../middleware/validation');

const librariesRouter = express.Router();

librariesRouter.post('/create-library', authenticate, authorize(["SUPER_ADMIN"]), checkEmptyLibrary, createLibraries);
librariesRouter.get('/get-all-libraries', getAllLibraries);
librariesRouter.get('/get-detail-libraries/:id', getDetailLibraries);
librariesRouter.put('/edit-libraries/:id', authenticate, authorize(["SUPER_ADMIN"]), checkEmptyLibrary, editLibraries)
librariesRouter.delete('/delete-libraries/:id', authenticate, authorize(["SUPER_ADMIN"]), deleteLibrary)

module.exports = {
    librariesRouter
}