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
