const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer(function (req, res) {
    const path = req.url;
    if (path.includes("vegetable")) {
        const pathString = `${__dirname}/data/vegetable.json`;
        fs.readFile(pathString, function(err, data){
          res.setHeader("Content-Type", "application/json");
          const dataParsed = JSON.parse(data);
          res.write(JSON.stringify(dataParsed));
          res.end();
        });
    } else res.write("Hello API");
    res.end();
  })
  .listen(8080);
