const express = require("express");
const falcorExpress = require("falcor-express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./app/router");

const app = express();
const PORT = 3000;

const corsOptions = {
  "credentials": true,
  "origin": "http://localhost:8080",
};
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/model.json", cors(corsOptions), falcorExpress.dataSourceRoute(() => {
  return router;
}));

// serve static files from current directory;
app.use(express.static(__dirname + "/"));

const server = app.listen(PORT, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log("Falcor Server listening at http://%s:%s", host, port);
});
