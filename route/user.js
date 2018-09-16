import express from 'express';
import {getList, register} from '../service/user';
import {isValidAuth} from '../service/auth';

const userRouter = express.Router();

userRouter.get('/', (req, res, next) => {
    res.send('Found default router');
});

userRouter.get('/get', isValidAuth, (req, res, next) => {
    getList().then(resp => {
        res.json(resp);
    }, err=> {
        res.json(err);
    })
});

userRouter.post('/register', (req, res, next) => {
    register(req.body).then(resp => {
        res.json(resp);
    }, err => {
        res.json({
            message: 'error',
            data: err
        });
    });
});

export default userRouter;