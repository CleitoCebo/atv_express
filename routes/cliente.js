// importando o módulo express
const express = require("express");

// const com Router para lidar com as rotas
const rotas = express.Router();

// rota para obter a página
rotas.get("/", (req, res) => {
  res.send("cliente - GET");
});

// rota para criar algo no servido
rotas.post("/", (req, res) => {
  res.send("cliente - POST");
});

// rota para atualizar alguma coisa existente
rotas.put("/", (req, res) => {
  res.send("cliente - PUT");
});

// rota para excluir algo
rotas.delete("/", (req, res) => {
  res.send("cliente - DELETE");
});

// exportando as rotas 
module.exports = rotas;