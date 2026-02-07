import axios from 'axios';

const getBaseUrl = () => {
  let host = import.meta.env.VITE_BE_HOST || '';
  if (host && !host.startsWith('http://') && !host.startsWith('https://')) {
    host = `http://${host}`;
  }
  return host ? `${host}/api` : '/api';
};

const api = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add any auth tokens or custom headers here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors globally
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
