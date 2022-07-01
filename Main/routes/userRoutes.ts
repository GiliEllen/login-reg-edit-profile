import express from 'express';
import { editUser } from '../controller/userCtrl';
const router: express.Router  = express.Router();

router

    .post('/edit-user', editUser)

export default router;