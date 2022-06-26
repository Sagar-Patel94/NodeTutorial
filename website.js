const fs = require('fs');
const http = require("http");

const port = process.env.PORT || 1286;

const server = http.createServer((req, res) => {
  
  res.setHeader("Content-Type", "text/html");
  console.log(req.url, "reqUrl");
  if (req.url == "/") {
    res.statusCode = 200;
    const data = fs.readFileSync('index.html');
    res.end(data.toString());
  }
  else if (req.url == "/cwh") {
    res.statusCode = 200;
    res.end("<h1>This is CodeWithHarry</h1> <p>Hey this is the way to rock the world!</p>");
  }
  else if (req.url == "/about") {
    res.statusCode = 200;
    res.end("<h1>About CodeWithHarry</h1> <p>Hey this is about CodeWithHarry!</p>");
  }
  else {
    res.statusCode = 404;
    res.end("<h1>Not Found</h1> <p>Hey this page is not found in this server</p>");
  }
});

server.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
