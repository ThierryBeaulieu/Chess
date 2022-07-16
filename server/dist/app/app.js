"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const cookie_controller_1 = __importDefault(require("./controller/cookie.controller"));
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const cookieController = new cookie_controller_1.default();
app.use('/api-cookie/', cookieController.getRouter());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.post('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(process.env.PORT, () => {
    console.log(`[Listening on port ${process.env.PORT}]`);
});
