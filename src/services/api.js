import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV !== 'production'
      ? 'http://localhost:4000'
      : 'https://my-json-server.typicode.com/italoiz/bossabox-frontend-challenge',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
