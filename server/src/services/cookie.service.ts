import { Response, Request } from 'express';

const express = require('express');
const router = express.Router();

// middleware
router.get('/user', function (req: Request, res: Response) {
  console.log('[USER COOKIE SENT]');
  res.send('This is a cookie!');
});
