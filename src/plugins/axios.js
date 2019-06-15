import axios from 'axios';
import Vue from 'vue';
// import tokenService from '../common/tokenService';
import config from '../../config';

const { BASE_URL } = config

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.get['Accepts'] = 'application/json'; /* eslint-disable-line */

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const AxiosPlugin = {
  install: function (Vue) {
    Object.defineProperty(Vue.prototype, '$axios', { value: axios });
  }
};

Vue.use(AxiosPlugin)