const { insert, getStatistics } = require('./controllers/conversion.controller');

exports.routesConfig = function (app) {
  
  app.post('/conversion', [ insert ]);

  app.get('/conversion/statistics', [ getStatistics ]);
};