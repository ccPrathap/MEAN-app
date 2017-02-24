var express = require("express");
var path = require('path');

var serverapp = express();

var __projectRoot = __dirname;

serverapp.set('port', (process.env.PORT || 3000));
serverapp.use('/', require('./routes/index'));

// expose node_modules to client app
serverapp.use(express.static(__projectRoot));

serverapp.get('*', function (req, res, next) {
    res.sendFile(path.join(__projectRoot + '/index.html'));
});


serverapp.listen(serverapp.get('port'), function() {
    console.log('Node server listening on port '+ serverapp.get('port'));
});