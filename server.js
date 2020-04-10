const path = require("path");
const express = require("express");
const app = require("./src/App.js");

const server = express();

server.use(express.static(path.join(__dirname, "public")));

server.get("*", function(req, res) {
  const { html } = app.render({ url: req.url });

  res.write(`
    <!DOCTYPE html>
    <link rel='stylesheet' href='/global.css'>
    <link rel='stylesheet' href='/bundle.css'>
    <body>${html}</body>
    <script src="/bundle.js"></script>
  `);

  res.end();
});

const port = 3000;
server.listen(port, () => console.log(`Listening on port ${port}`));
