import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3333' });

const getCountyInfos = async (countyName, setterFunction) => {
    const response = await api.get(`/county/${countyName.toLowerCase()}`);
    return response;
}

export { getCountyInfos }