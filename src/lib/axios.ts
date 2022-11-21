import axios from 'axios';

const API_URL = 'https://api.github.com';

const server = axios.create({
  baseURL: API_URL,
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    'Content-Type': 'application/vnd.github+json',
  },
});

export default server;
