const Conversion = require( "../models/conversion.model");

const convert = async (conversionData) => {
  conversionDataWithResult = { ...conversionData,
    result: conversionData.amount*2, usdResult: conversionData.amount*3 }
  return await Conversion.create(conversionDataWithResult);
}

const fetchStatistics = async ( ) => {
  return await Conversion.aggregate([
    { "$group": {
        "_id": null,
        "usdTotal": { "$sum": "$usdResult" }
    }}
  ])
}

module.exports = { convert, fetchStatistics }