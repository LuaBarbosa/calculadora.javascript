const PI = require("../models/models");

exports.test = function (req, res) {
  res.send("Olá! Teste ao Controller");
};

exports.listar = function (req, res) {
  res.send({ type: "GET" });
};

exports.criar = function (req, res) {
  res.send({
    type: "POST",
    Anuncio: req.body.anuncio,
    Cliente: req.body.Cliente,
    Inicio: req.body.inicio,
    Termino: req.body.Termino,
    Investimento: req.body.investimento,
  });
};

exports.atualizar = function (req, res) {
  res.send({ type: "PUT" });
};

exports.delete = function (req, res) {
  res.send({ type: "DELETE" });
};
