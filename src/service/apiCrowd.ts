import axios from 'axios';

const apiCrowd = axios.create({
  baseURL: 'https://localhost8083',
});

export default apiCrowd;