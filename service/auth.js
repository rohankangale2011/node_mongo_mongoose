import jwt from 'jsonwebtoken';
import {SECRET} from '../config/app-config';
import {Login} from '../controller/auth';

export async function login(data) {
    const result = await Login(data);
    return result;
}

export function isValidAuth(req, res, next) {
    const token = req.headers.token;

    if(!token) {
        res.json({ auth: false, message: 'No Token'});
    } else {
        jwt.verify(token, SECRET, (err, decode) => {
            if(err) {
                res.json({ auth: false, message: 'Invalid Token'});
            } else {
                next();
            }
        });
    }
}