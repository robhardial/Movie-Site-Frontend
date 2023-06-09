import axios from 'axios';

export default axios.create({
    baseURL:'https://mongo-spring-b2tech.herokuapp.com',
    headers: {"ngrok-skip-browser-warning": "true"}
});
