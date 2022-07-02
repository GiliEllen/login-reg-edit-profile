import express from 'express';
import { getUser } from '../controller/userCtrl';
const router: express.Router  = express.Router();

router
    // .get(`/get-user`, getUser)
    .patch('/get-user', getUser);

export default router;
import { editUser } from '../controller/userCtrl';
    .post('/edit-user', editUser)
import express from "express";
import { register, login } from "../controller/userCont";
const router = express.Router();
router
.post('/user-register',register)
.post('/user-login',login)

export default router