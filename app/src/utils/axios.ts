import axios from 'axios'
import { baseUrl } from './constants'

const axiosInstance = axios.create({
  baseURL: baseUrl,
})

axiosInstance.interceptors.request.use(
  (config) => config,
  (e) => Promise.reject(e.response.data.error)
)

axiosInstance.interceptors.response.use(
  (response) => response,
  (e) => Promise.reject(e.response.data.error)
)

export default axiosInstance
