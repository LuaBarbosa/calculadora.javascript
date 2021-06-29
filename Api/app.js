const express = require("express");
const app = express();
const BD = require("mysql");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");

let port = 3000;
app.use(bodyParser.json());
app.use("/", routes);

const connection = BD.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

app.get("/", function (req, res) {
  res.send("END POINT INVÁLIDO!");
});

app.listen(process.env.port || port, () => {
  console.log("Servidor em execução no porto: " + port);
});
