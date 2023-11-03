import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://hh-gym-backend.onrender.com/api",
});

export default axiosInstance;