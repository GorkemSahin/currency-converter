const Conversion = require('../models/conversion.model');

const createAndSaveConversion = async (conversion) => {
  return await Conversion.create(conversion);
}

const getTotalAmountOfConversions = async () => {
  const [{ usdTotal }] = await Conversion.aggregate([
    { $group: {
      _id: null,
      usdTotal: { $sum: "$usdResult" }
    }}
  ]);
  return usdTotal;
}

const getMostPopularCurrency = async () => {
  const [{ _id: { currency } }] = await Conversion.aggregate([
    { 
      $match: { 
        result: { $exists: true } 
      }
    }, { 
      $group: { 
        _id: {
          currency: "$to",
        },
        count: { $sum: 1 } 
      } 
    }, { 
      $sort: { "count": -1} 
    } , { 
      $limit: 1 
    } 
  ]);
  return currency;
}

const getNoOfConversions = async () => {
  const [{ noOfConversions }] = await Conversion.aggregate([
    { 
      $match: { 
        result: { $exists: true } 
      }
    }, {
      $group: {
      _id: null,
      noOfConversions: { $sum: 1 }
      }
    }
  ]);
  return noOfConversions;
}

module.exports = {
  createAndSaveConversion,
  getTotalAmountOfConversions,
  getMostPopularCurrency,
  getNoOfConversions
};