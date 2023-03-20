import jwt from 'jsonwebtoken';
import { SECRET } from '../../src/configs/config';

export const signJwt = (payload) => {
  return jwt.sign(payload, SECRET, { expiresIn: '2h' });
};

export const verifyJwt = (token) => {
  return jwt.verify(token, SECRET);
};