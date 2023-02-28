import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-975f4-default-rtdb.firebaseio.com/'
})

export default instance;