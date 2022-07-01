
import express from "express";
import mongoose from 'mongoose';
require('dotenv').config()
import userRoutes from "./routes/userRoutes"

const app:express.Application = express();
const port = process.env.PORT || 4023;

app.use(express.static('public'));
app.use(express.json());

const url = process.env.MONGO_URL as string;

mongoose.connect(url).then(() => console.log("Connected to DB!"))
.catch((err) => console.log(err));

app.use('/users',userRoutes)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})








