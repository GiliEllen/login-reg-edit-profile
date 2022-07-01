"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//MONGO_URL = mongodb+srv://doritgy:bW6nUlcDdX9uUBgR@cluster0.grzjg.mongodb.net/LGDProject?retryWrites=true&w=majority
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = express_1.default();
const port = process.env.PORT || 4023;
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
const url = process.env.MONGO_URL;
mongoose_1.default.connect(url).then(() => console.log("Connected to DB!"))
    .catch((err) => console.log(err));
app.use('/users', userRoutes_1.default);
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
