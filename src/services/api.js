import axios from 'axios';
import { redirectTo } from '../util/navigation';
import Cookies from 'js-cookie';

const api = axios.create({ baseURL: 'http://localhost:3333' });

const isAuthenticated = async (isLoginPage) => {

    const authToken = Cookies.get('AUTH_TOKEN');

    if (!authToken || authToken === '') {
        return isLoginPage ? null : redirectTo('/login');
    }
    else {
        try {
            const response = await api.get('/is_authenticated', {
                headers: { authToken }
            });

            const { isAuthenticated } = response.data; // isso deve vir do back

            if (!isAuthenticated) {
                return !isLoginPage ? redirectTo('/login') : null;
            }
            else {
                return isLoginPage ? redirectTo('/') : null;
            }
        } catch (error) {
            console.log({ error });
        }
    }
}

const authenticate = async (username, password, rememberMe) => {
    const { data } = await api.post('/authenticate', { username, password });
    const { authToken, error } = data;

    if (error) {
        return { error };
    }

    rememberMe
        ? Cookies.set('AUTH_TOKEN', authToken, { expires: 5000000 })
        : Cookies.set('AUTH_TOKEN', authToken);


    return { sucess: 'authentication complete' }
}

const getCountyInfos = async (countyName) => {
    const response = await api.get(`/county/${countyName.toLowerCase()}`);
    return response;
}

/* ---- Touristic Spots ---- */
const getTouristicSpots = async (countyId, limit = 0) => {
    const touristicSpots = await api.get(`/touristic_spots?county_id=${countyId}&limit=${limit}`);
    return touristicSpots;
}

const getTouristicSpot = async (touristicSpotId) => {
    const touristicSpot = await api.get(`/touristic_spot?id=${touristicSpotId}`);
    return touristicSpot;
}

const postTouristicSpot = async (touristicSpots) => {
    await api.post(`/touristic_spots`, { touristicSpots });
}

export {
    authenticate,
    isAuthenticated,
    getCountyInfos,
    getTouristicSpots,
    getTouristicSpot,
    postTouristicSpot
}