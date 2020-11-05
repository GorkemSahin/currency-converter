const config = require('./src/common/config/env.config.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ConversionsRouter = require('./src/conversion/routes.config');

app.use(bodyParser.json());

ConversionsRouter.routesConfig(app);

app.listen(config.port, function () {
    console.log('app listening at port %s', config.port);
});