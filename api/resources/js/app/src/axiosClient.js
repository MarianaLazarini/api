import axios from 'axios';
const axiosClient = axios.create({
    baseURL:'http://localhost:8000/api/user/index'
});

export default axiosClient;