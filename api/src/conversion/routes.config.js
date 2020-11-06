const { getStatistics, getConversion } = require('./controllers/conversion.controller');

exports.routesConfig = function (app) {
  
  app.get('/conversion', [ getConversion ]);

  app.get('/conversion/statistics', [ getStatistics ]);
};