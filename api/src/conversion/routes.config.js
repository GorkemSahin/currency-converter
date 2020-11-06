const { getStatistics, getConversion, getSymbols } = require('./controllers/conversion.controller');

exports.routesConfig = function (app) {
  
  app.get('/conversion/convert', [ getConversion ]);

  app.get('/conversion/statistics', [ getStatistics ]);

  app.get('/conversion/symbols', [ getSymbols ])
};