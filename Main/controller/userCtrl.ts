import express from 'express';
import UserModel from '../model/userModel';
import mongoose from 'mongoose';

export async function getUser (req: express.Request, res: express.Response) {
    try {
        const userId = req.body;
        if (!userId) throw new Error("Couldn't get userId from query");
        console.log(userId);
        const user = await UserModel.findById(userId);
        if(!user) throw new Error(`Couldn't find user with the id: ${userId}`);
        console.log(user);
        // const user = 450;
        res.send({ user });
    } catch (error) {
        res.send({ error: error.message });
    }
} 