const http = require("http");
const fs = require('fs').promises;
const requestListener = function (request, response) {

  if (request.url === "/") {
    fs.readFile(__dirname + "/info.html").then(
      contents => {
        response.setHeader(
          "Content-type", "text/html; charset=UTF-8" 
        );
        response.writeHead(200);
        response.end(contents);
      }
    );
  } else {
    fs.readFile(__dirname + "/data.json").then (
      contents => {
        response.setHeader("Content-Type", "text/html; charset=UTF-8");
        response.writeHead(200);
        response.end(contents);
        
      }
    );
  }
  
}
const server = http.createServer(requestListener);
const host = "0.0.0.0";
const port = "8080";
server.listen (
  port,
  host,
  () => {
    console.log('Server is running');
  }
)