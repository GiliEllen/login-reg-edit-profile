import express from 'express';
import { getUser } from '../controller/userCtrl';
const router: express.Router  = express.Router();

router
    // .get(`/get-user`, getUser)
    .patch('/get-user', getUser);

export default router;