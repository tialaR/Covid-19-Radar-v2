import axios from 'axios';

const apiCrowd = axios.create({
  baseURL: 'http://localhost8083',
});

export default apiCrowd;