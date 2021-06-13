import { Conversion, ConversionQuery, Statistic } from 'types/types'
import axiosInstance from '../utils/axios'

export const fetchSymbols = async () => {
  return await axiosInstance.get<string[]>(`/conversion/symbols`)
}

export const postConversion = async (query: ConversionQuery) => {
  return await axiosInstance.post<Conversion>(`/conversion/convert`, {
    ...query,
  })
}

export const fetchStatistics = async () => {
  return await axiosInstance.get<Statistic[]>(`/conversion/statistics`)
}
