 const express = require('express');
 const { register, login, getAllUser, uploadAvatar, clientEditUser, adminEditType, deleteUser } = require('../controllers/users.controllers');
 const { authenticate } = require('../middleware/authenticate');
 const { authorize } = require('../middleware/authorize');
 const { uploadImage } = require('../middleware/uploadImg');
 const { checkEmpty, checkEmptyEditUser } = require('../middleware/validation');

 const userRouter = express();

 userRouter.post('/register', checkEmpty, register);
 userRouter.post('/login', checkEmpty, login);
 userRouter.get('/get-all-user', getAllUser);
 userRouter.post('/upload-avatar', authenticate, uploadImage('avatar'), uploadAvatar);
 userRouter.put('/edit-userName', checkEmptyEditUser, authenticate, clientEditUser);
 userRouter.put('/edit-type-user/:id', authenticate, authorize(['SUPER_ADMIN']), adminEditType);
 userRouter.delete('/delete-user/:id', authenticate, authorize(['SUPER_ADMIN']), deleteUser);

 module.exports = {
     userRouter
 }