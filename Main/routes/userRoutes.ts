import express from 'express';
import { getUser, editUser, register, login } from '../controller/userCtrl';
const router: express.Router = express.Router();

router
    // .get(`/get-user`, getUser)
    .patch('/get-user', getUser)
    .post('/edit-user', editUser)
    .post('/user-register', register)
    .post('/user-login', login)

export default router;

