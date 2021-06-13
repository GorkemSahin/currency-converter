export interface ConversionQuery {
  from: string
  to: string
  amount: number
}

export interface Conversion extends ConversionQuery {
  result: number
  usdResult: number
}

export interface Statistic {
  name: string
  value: string
}

export interface RateResponse {
  rates: { [key: string]: number }
  base: string
}

export interface SymbolsResponse {
  [key: string]: number
}
