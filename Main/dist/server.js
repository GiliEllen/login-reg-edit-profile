"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
const app = express_1.default();
const port = process.env.PORT || 4000;
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
const url = process.env.MONGO_URL;
mongoose_1.default.connect(url).then(() => console.log("Connected to DB!"));
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
