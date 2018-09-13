import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import {SECRET} from '../config/app-config';
import User from '../model';

export async function GetListUser() {
    return User.find({}).exec();
}

export async function RegisterUser(data) {
    const hashedPassword = bcrypt.hashSync(data.password, 8);

    const user = new User({
        name: data.name,
        email: data.email,
        password: hashedPassword
    });

    return new Promise((resolve, reject) => {
        user.save((err, doc) => {
            if(err) {
                reject(err);
            } else {
                const token = jwt.sign({ id: doc._id}, SECRET, {
                    expiresIn: 60
                });

                resolve({ auth: true, token });
            }
        })
    })
}