var http = require("http");
var connect = require("connect");

var app = connect()
  .use(connect.logger("dev"))

  .use(connect.static("."))

  .use(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
  });

var server = http.createServer(app);

server.listen(9999, function () {
  console.log("server is listening");
});
