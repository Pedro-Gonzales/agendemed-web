import axios from 'axios';

const apiUrl = 'http://localhost:3333';

const api = axios.create({
  baseURL: apiUrl,
  withCredentials: true
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        localStorage.removeItem('medToken');
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );

export default api;

