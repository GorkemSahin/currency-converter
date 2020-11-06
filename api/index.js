const config = require('./src/common/config/env.config.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const ConversionsRouter = require('./src/conversion/routes.config');

app.use(cors());
app.use(bodyParser.json());

ConversionsRouter.routesConfig(app);

app.listen(config.port, function () {
    console.log('Back-end listening at port %s', config.port);
});