import {Login} from '../controller/auth';

export async function login(data) {
    const result = await Login(data);
    return result;
}