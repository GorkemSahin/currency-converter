const { fetchSymbols } = require('../../common/services/exchange.service');
const { convert, prepareStatistics } = require('../services/conversion.service');

const getConversion = async (req, res, next) => {
  const conversion = await convert(req.query);
  res.status(200).send(conversion);
};

const getStatistics = async (req, res, next) => {
  const statistics = await prepareStatistics();
  res.status(200).send(statistics);
};

const getSymbols = async (req, res, next) => {
  const symbols = await fetchSymbols();
  res.status(200).send(symbols);
};

module.exports = { getConversion, getStatistics, getSymbols }
