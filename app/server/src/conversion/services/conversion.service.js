const {
  createAndSaveConversion,
  getTotalAmountOfConversions,
  getMostPopularCurrency,
  getNoOfConversions,
} = require('../repository/conversion.repository')
const truncate = require('../../common/utils/decimal.utils')
const { fetchRates } = require('../../common/services/exchange.service')

const convert = async ({ from, to, amount }) => {
  const rates = await fetchRates(from, to)
  const conversion = {
    from,
    to,
    amount,
    result: truncate(amount * rates.to, 2),
    usdResult: truncate(amount * rates.usd, 2),
  }
  return await createAndSaveConversion(conversion)
}

const prepareStatistics = async () => {
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

module.exports = { convert, prepareStatistics }
