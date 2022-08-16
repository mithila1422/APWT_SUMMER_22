import {useNavigate } from "react-router-dom";
import axios from 'axios';

 
const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/'
});

instance.interceptors.request.use(function (config) {
    console.log(localStorage.getItem("user"));
    config.headers.common['Authorization'] =  localStorage.getItem("user");
    return config;
  
  }, function (error) {
    return Promise.reject(error);
  });
export default instance;