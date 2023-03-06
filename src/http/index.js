import axios from "axios";

export const API_URL = 'http://127.0.0.1:7000/'

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL
})

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
  return config;
})

export default $api;