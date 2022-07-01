import express from 'express';
import UserModel from '../model/userModel';
import mongoose from 'mongoose';

export async function editUser(req, res) {
    try {
        const userid = 1
        const { email, username, job, address,profilePic } = req.body;
        const { error } = UserValidation.validate({ email, username, job, address,profilePic });
        if (error) throw error;

        await UserModel.updateOne({userid}, {
        email: email,
        username: username,
        job: job,
        address: address,
        profilePic: profilePic,
        });
        
        const user = UserModel.findOne(email)
        // user.email = email;
        // user.username = username;
        // user.job = job;
        // user.address = address;
        // user.profilePic = profilePic;
        // await user.save();

        res.send({ok: true, result})
        console.log(result);

    } catch(error) {
        console.error(error);
        res.send({eror: error.message});
    }
} 