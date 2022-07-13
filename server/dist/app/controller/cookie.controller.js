"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
// middleware
router.get('/user', function (req, res) {
    {
    }
    console.log('[USER COOKIE SENT]');
    res.send('This is a cookie!');
});
exports.default = router;
