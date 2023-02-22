var express = require('express'),
bodyParser = require('body-parser'),
app = express(),
service = require('./service.js');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}) );

app.use(express.static('../public'));

service.attachService(app);

app.listen(3333);

console.log("Server at http://localhost:3333")