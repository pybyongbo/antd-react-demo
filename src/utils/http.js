// import React from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';
import qs from 'qs';
// 实例对象
const service = axios.create({
  timeout: 30000,
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded'
  // }
});
service.interceptors.request.use((config) => {
  // const { showLoading } = config;
  // if (showLoading) {
  //   showFullScreenLoading();
  // }
  // config.data = qs.stringify(config.data) // 转为formdata数据格式
  return config
}, (error) => {
  console.log('error1', error);
  return Promise.reject(error);
})

service.interceptors.response.use(
  response => {

    return response;
  },
  error => {
    // const { data } = error.response;
    return Promise.reject(error);
  }
);

export default service;