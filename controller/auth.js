import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import {SECRET} from '../config/app-config';
import User from '../model';

export async function Login(data) {
    return new Promise((resolve, reject) => {
        User.findOne({ email: data.email }, (err, user) => {
            if(err) {
                reject(err);
            } else if(!user) {
                reject({ auth: false, message: 'No user found'})
            } else {
                var passwordIsValid = bcrypt.compareSync(data.password, user.password);
                if (!passwordIsValid) {
                    reject({ auth: false, message: 'Incorrect password' });
                } else {
                    var token = jwt.sign({ id: user._id }, SECRET, {
                        expiresIn: 60
                    });

                    resolve({ auth: true, token: token });
                }
            }
        })
    });
}