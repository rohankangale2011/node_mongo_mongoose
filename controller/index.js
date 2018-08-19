import mongoose from 'mongoose';
import User from '../model';

export async function getData() {
    return User.find({}).exec();
}

export async function ServiceSaveData(data) {
    var user = new User({
        name: data.name
    });
    
    return new Promise((resolve, reject) => {
        user.save((err, doc) => {
            if(err){
                reject(err);
            } else {
                resolve(doc);
            }
        });
    });
}