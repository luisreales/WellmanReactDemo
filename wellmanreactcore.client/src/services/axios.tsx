

import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'https://localhost:7150',
    headers: {
        'Content-Type': 'application/json',
    },
});


axiosInstance.interceptors.request.use(
    config => {

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    response => response,
    error => {

        if (error.response && error.response.status === 401) {
            console.log(error.response);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
