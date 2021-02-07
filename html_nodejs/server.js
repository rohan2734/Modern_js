var http = require("http");
var url = require("url");
var fs = require("fs");

var server = http.createServer(function (request, response) {
  var path = url.parse(request.url).pathname;

  switch (path) {
    case "/":
      response.writeHead(200, {
        "Content-Type": "text/plain",
      });
      response.write("This is Test Message.");
      response.end();
      break;
    case "/HtmlPage1.html":
      fs.readFile(__dirname + path, function (err, data) {
        if (err) {
          response.writeHead(404);
          response.write(err);
          response.end();
        } else {
          response.writeHead(200, {
            "Content-Type": "text/html",
          });
          response.write(data);
          response.end();
        }
      });
      break;
  }
});
server.listen(8082, () => {
  console.log("connected to 8082");
});
