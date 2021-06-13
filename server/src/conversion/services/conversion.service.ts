import {
  createAndSaveConversion,
  getTotalAmountOfConversions,
  getMostPopularCurrency,
  getNoOfConversions,
} from '../repository/conversion.repository'
import { truncate } from '../../common/utils/decimal.utils'
import { getRates } from '../../common/services/exchange.service'
import { ConversionQuery, Statistic } from '../../../../types'

export const convert = async ({ from, to, amount }: ConversionQuery) => {
  const rates = await getRates(from, to)
  const conversion = {
    from,
    to,
    amount,
    result: truncate(amount * rates.to, 2),
    usdResult: truncate(amount * rates.usd, 2),
  }
  return await createAndSaveConversion(conversion)
}

export const prepareStatistics: () => Promise<Statistic[]> = async () => {
  const noOfConversions = await getNoOfConversions()
  const totalAmount = await getTotalAmountOfConversions()
  const mostPopularCurrency = await getMostPopularCurrency()
  return [
    {
      name: 'Total Amount Converted',
      value: truncate(totalAmount, 0) + ' USD',
    },
    { name: 'Number of Conversions', value: noOfConversions },
    { name: 'Most Popular Currency', value: mostPopularCurrency },
  ]
}
