import { fetchRates, fetchSymbols } from '../utils/axios.utils'

export const getRates = async (from: string, to: string) => {
  const symbols = `USD,${to}`
  const resp = await fetchRates(from, to, symbols)
  return { to: resp.data.rates[to], usd: resp.data.rates['USD'] }
}

export const getSymbols = async () => {
  const resp = await fetchSymbols()
  return Object.keys(resp.data.rates)
}
