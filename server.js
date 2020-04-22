const express = require("express");
const bodyParser = require("body-parser");
var hash = require("hash.js");

const app = express();

app.use(bodyParser.json({ type: "application/json" }));

app.post("/hash", (req, res, next) => {
  console.log(req.body);
  var ans = hash.sha256().update(req.body.data).digest("hex");
  console.log(ans);
  res.end(JSON.stringify({ hash: ans }));
});

app.listen(8787);
