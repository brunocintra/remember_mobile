import axios from 'axios';

const api = axios.create({
    baseURL: 'https://remember-backend-app.herokuapp.com/',
    headers: {'Content-Type': 'application/json+fhir'}
});

export default api;