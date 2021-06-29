const express = require("express");
const server = express();

server.use(express.json());
const anuncios = [];

server.get("/cadastro", (req, res) => {
  return res.json("Hello world");
});

server.post("cadastro/", (req, res) => {
  const dados = req.body;
  cadastro.push(dados);
  return res.json(cadastro);
});

server.put("/cadastro/:index", (req, res) => {
  const index = req.params;
  const dados = req.body;

  cadastro[index] = dados;
  return res.json(cadastro);
});
server.delete("/cadastro/:index", (req, res) => {
  const { index } = req.params;

  cadastro.splice(index, 1);

  return res.send();
});
server.listen(3000);
