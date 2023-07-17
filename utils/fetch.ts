import axios, { AxiosRequestConfig } from 'axios';

axios.create({
  baseURL: '',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
})

// 请求拦截器
axios.interceptors.request.use((config) => {
  // 从缓存中读Token 
  const token = localStorage.getItem('token');
  config.headers.token = token || '';
  return config;
});


// 响应拦截器
axios.interceptors.response.use(
  response => {
    return response;
  });


export default axios;