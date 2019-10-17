var express = require('express');
var app = express();
var config = require('./config');
var mongoose = require('mongoose');
var apiController = require('./api/apiController');
var path = require('path')
var port = (process.env.PORT || 6969);

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(config.dbConnectionURL(), {useNewUrlParser: true});
apiController(app);
app.listen(port);
