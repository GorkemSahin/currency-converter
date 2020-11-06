const { fetchSymbols } = require('../../common/services/exchange.service');
const { convert, fetchStatistics } = require('../services/conversion.service');

const getConversion = async (req, res) => {
  try {
    const conversion = await convert(req.query);
    res.status(200).send(conversion);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getStatistics = async (req, res) => {
  try {
    const statistics = await fetchStatistics();
    res.status(200).send(statistics);
  } catch (err){
    res.status(500).send(err);
  }
};

const getSymbols = async (req, res) => {
  try {
    const symbols = await fetchSymbols();
    res.status(200).send(symbols);
  } catch (err){
    res.status(500).send(err);
  }
};

module.exports = { getConversion, getStatistics, getSymbols }