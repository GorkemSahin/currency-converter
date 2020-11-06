const Conversion = require( "../models/conversion.model");
const { fetchRates } = require("../../common/services/exchange.service");

const convert = async ({ from, to, amount }) => {
  const rates = await fetchRates(from, to);
  const conversion = { from, to, amount, result: amount*rates.to, usdResult: amount*rates.usd};
  return await Conversion.create(conversion);
}

const fetchStatistics = async ( ) => {
  return await Conversion.aggregate([
    { "$group": {
        "_id": null,
        "usdTotal": { "$sum": "$usdResult" }
    }}
  ]);
}

module.exports = { convert, fetchStatistics }