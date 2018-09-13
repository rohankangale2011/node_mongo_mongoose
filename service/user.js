import {GetListUser, RegisterUser} from '../controller/user';

export async function getList() {
    const result =  await GetListUser();
    return result;
};

export async function register(data) {
    const result = await RegisterUser(data);
    return result;
}