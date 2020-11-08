const config = require('../config/env.config');
const axios = require('axios');
const { baseUrl } = config;

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {}
});

axiosInstance.interceptors.request.use(
  async (config) => {
    config.params = { ...config.params } // API KEY can be added as a param here, if needed by another external API
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

module.exports = axiosInstance;