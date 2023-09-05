import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://hh-gym-backend-production.up.railway.app/api",
});

export default axiosInstance;