import express, { Request, Response, Router } from 'express';
import jwt from 'jsonwebtoken';
import App from '../models/app';
import config from '../config';

export default function getUserController(): Router {
  return express
    .Router({ mergeParams: true })
    .post('/register', registerUser)
    .post('/login', loginUser);
}

function registerUser(req: Request, res: Response) {
  const { body } = req;
  if (body) {
    const user = App.userService.registerUser(body);
    res.status(200).json({ success: true, userBody: user });
  }
}
function loginUser(req: Request, res: Response) {
  const { body } = req;
  if (body) {
    const ifuserExists = App.userService.findUser(body.email, body.password);
    if (ifuserExists) {
      let token = jwt.sign({ userId: ifuserExists.id }, config.secretKey, {
        expiresIn: '1h',
      });
      res.status(200).json({ success: true, token: token });
    } else {
      res.status(200).json({ success: false, message: 'User Not Exists' });
    }
  }
}
