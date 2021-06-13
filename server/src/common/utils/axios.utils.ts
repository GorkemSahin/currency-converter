import axios from 'axios'
import { RateResponse, SymbolsResponse } from '../../../../types'
import { config } from '../config/env.config'

const axiosInstance = axios.create({
  baseURL: config.baseUrl,
  headers: {},
  params: {
    access_key: config.accessKey,
  },
})

axiosInstance.interceptors.request.use(
  async (config) => {
    config.params = { ...config.params }
    return config
  },
  (e) => Promise.reject(e.response?.data?.error)
)

axiosInstance.interceptors.response.use(
  (response) => response,
  (e) => Promise.reject(e.response?.data?.error)
)

export const fetchRates = async (from: string, to: string, symbols: string) =>
  await axiosInstance.get<RateResponse>('/latest', {
    params: { base: from, symbols },
  })

export const fetchSymbols = async () =>
  await axiosInstance.get<SymbolsResponse>('/latest')
