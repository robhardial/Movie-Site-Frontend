import axios from 'axios';

export default axios.create({
    baseURL:'http://44.201.80.254:8080',
    headers: {"ngrok-skip-browser-warning": "true"}
});