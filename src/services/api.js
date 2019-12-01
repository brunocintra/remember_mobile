import axios from 'axios';

const api = axios.create({
    baseURL: 'https://remember-backend-app.herokuapp.com/',
});

export default api;