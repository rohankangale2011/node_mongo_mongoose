import {getData as ServiceGetData, ServiceSaveData} from '../controller';

export async function getData () {
    const result =  await ServiceGetData();
    return result;
};

export async function saveData(data) {
    const result = await ServiceSaveData(data);
    return result;
}