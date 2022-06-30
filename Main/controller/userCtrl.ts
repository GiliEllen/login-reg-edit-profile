import express from 'express';
import UserModel from '../model/userModel';

export async function getUser (req: express.Request, res: express.Response) {
    try {
        const userId = req.query;
        if (!userId) throw new Error("Couldn't get userId from query");
        console.log(userId);
        const user = UserModel.findById(userId);
        if(!user) throw new Error(`Couldn't find user with the id: ${userId}`);
        res.send({ user });
    } catch (error) {
        res.send({ error: error.message });
    }
} 