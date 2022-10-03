// importando o módulo express
const express = require("express");

// const com Router para lidar com as rotas
const rotas = express.Router();

// rota para obter a página
rotas.get("/", (req, res) => {
  res.send("console - GET");
});

// rota para criar algo no servido
rotas.post("/", (req, res) => {
  res.send("console - POST");
});

// rota para atualizar alguma coisa existente
rotas.put("/", (req, res) => {
  res.send("console - PUT");
});

// rota para excluir algo
rotas.delete("/", (req, res) => {
  res.send("console - DELETE");
});

// exportando as rotas 
module.exports = rotas;