import axios from 'axios';

// Criando instancia do Axios
const api = axios.create({
    baseURL: 'https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/api'
});

export default api;