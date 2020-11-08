const {
  getStatistics,
  getConversion,
  getSymbols
} = require('./controllers/conversion.controller');
const { conversionValidationRules, validate } = require('../conversion/validators/conversion.validator');

exports.routesConfig = function (app) {
  
  app.get('/conversion/convert', conversionValidationRules(), validate, getConversion);

  app.get('/conversion/statistics', getStatistics);

  app.get('/conversion/symbols', getSymbols)
};