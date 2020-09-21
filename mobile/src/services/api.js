import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.2:3333',
                // 10.0.2.2
});

export default api;