const { fetchSymbols } = require('../../common/services/exchange.service')
const { convert, prepareStatistics } = require('../services/conversion.service')

const getConversion = async (req, res, next) => {
  try {
    const conversion = await convert(req.body)
    res.status(200).send(conversion)
  } catch (e) {
    next(e)
  }
}

const getStatistics = async (req, res, next) => {
  try {
    const statistics = await prepareStatistics()
    res.status(200).send(statistics)
  } catch (e) {
    next(e)
  }
}

const getSymbols = async (req, res, next) => {
  try {
    const symbols = await fetchSymbols()
    res.status(200).send(symbols)
  } catch (e) {
    next(e)
  }
}

module.exports = { getConversion, getStatistics, getSymbols }
