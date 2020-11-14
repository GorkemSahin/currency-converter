const config = require('./src/common/config/env.config.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const conversionRoutes = require('./src/conversion/routes/conversion.routes');
const path = require("path");

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use('/conversion', conversionRoutes);

app.use((req, res, next) => {
    const error = new Error("Not found.");
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            ...error,
            message: error.message || "Something went wrong."
        }
    });
});

app.listen(config.port, function () {
    console.log('Back-end listening at port %s', config.port);
});