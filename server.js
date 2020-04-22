const express = require("express");
const bodyParser = require("body-parser");
var hash = require("hash.js");

const server = express();

server.use(bodyParser.json({ type: "application/json" }));

server.post("/hash", (req, res, next) => {
  console.log(req.body);
  var ans = hash.sha256().update(req.body.data).digest("hex");
  console.log(ans);
  res.json(JSON.parse(JSON.stringify({ hash: ans })));
});

server.listen(8787);
