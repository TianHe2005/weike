import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 10000
});

// 请求拦截器
instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      // 处理未授权的情况，如跳转到登录页面
      localStorage.removeItem('token');
      this.$router.push('/login');
    }
    return Promise.reject(error);
  }
);

export default {
  instance,
  apiUrl: 'http://localhost:8080/api'
};