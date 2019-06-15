import axios from 'axios';
import Vue from 'vue';
import tokenServices from '../common/tokenService';
import config from '../../vue.config';

const { BASE_URL } = config

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.get['Accepts'] = 'application/json'; /* eslint-disable-line */

axios.interceptors.request.use((config) => {
  if (tokenServices.getToken()) {
    if (config.url.indexOf('access_token') < 0) {
      const token = tokenServices.getToken();
      if (config.url.indexOf('?') >= 0) {
        config.url = `${config.url}&access_token=${token}`; /* eslint-disable-line */
      } else {
        config.url = `${config.url}?access_token=${token}`; /* eslint-disable-line */
      }
    }
  }
  return config;
});

const AxiosPlugin = {
  install: function (Vue) {
    Object.defineProperty(Vue.prototype, '$axios', { value: axios });
  }
};

Vue.use(AxiosPlugin)