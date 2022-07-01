
import express from "express";
import mongoose from 'mongoose';
require('dotenv').config()

const app:express.Application = express();
const port = process.env.PORT || 4000;

app.use(express.static('public'));
app.use(express.json());

const url = process.env.MONGO_URL as string;

mongoose.connect(url).then(() => console.log("Connected to DB!"))

import userRoutes from './routes/userRoutes';
app.use('/user', userRoutes);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

