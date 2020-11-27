import axios from 'axios';

const apiCrowd = axios.create({
  baseURL: 'http://192.168.0.7:8083',
});

export default apiCrowd;