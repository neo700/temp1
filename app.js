var express = require('express');
var app = express();
var config = require('./config');
var mongoose = require('mongoose');
var apiController = require('./api/apiController');

var port = (process.env.PORT || 6969);

mongoose.connect(config.dbConnectionURL(), {useNewUrlParser: true});
apiController(app);
app.listen(port);
