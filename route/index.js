import express from 'express';
import {getData, saveData} from '../service';

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Found default router');
});

router.get('/get', (req, res, next) => {
    getData().then(resp => {
        res.json(resp);
    }, err=> {
        res.json(err);
    })
});

router.post('/post', (req, res, next) => {
    saveData(req.body).then(resp => {
        console.log('Save successfully:' ,resp);
        res.json(resp);
    }, err => {
        console.log('Error while saving:', err);
        res.json({
            message: 'error',
            data: err
        });
    });
});

export default router;