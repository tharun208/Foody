import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';

export interface IDecodeType {
  userId: string;
  iat: string;
  exp: string;
}

export default function checkAuth(req: Request, res: Response, next: NextFunction) {
  let token = req.headers['authorization'] as string;
  if (token && token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }
  if (token) {
    try {
      const decode = jwt.verify(token, config.secretKey) as IDecodeType;
      (<any>req).userId = decode.userId;
      next();
    } catch (err) {
      res.status(401).json({
        success: false,
        message: 'Invalid Token',
      });
    }
  } else {
    res.status(401).json({
      success: false,
      message: 'Auth token is not supplied',
    });
  }
}
