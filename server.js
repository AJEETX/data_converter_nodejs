const express = require("express");

const port=process.env.PORT||5050;

const routes = require("./src/script/route.js");

const app = express();

app.use('/',express.static(__dirname + '/src/view'));

app.use('/run',routes);

const server = app.listen(port, function () {

    console.log("app running on port.", server.address().port);

});