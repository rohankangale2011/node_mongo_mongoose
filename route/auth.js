import express from 'express';
import {login} from '../service/auth';

const authRouter = express.Router();

authRouter.post('/login', (req, res, next) => {
    login(req.body).then(resp => {
        res.json(resp);
    }, err => {
        res.json({
            message: 'error',
            data: err
        })
    });
});

export default authRouter;