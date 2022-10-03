// const para importar o express para a aplicalção
const express = require("express");

// inicialização da aplicação
const app = express();

// ROTA PRINCIPAL

// definição da rota com o metodo get
app.get("/", (req, res) => {
  // http://localhost:3000/
  res.send("Página inicial");
});


// ROTAS PARA OS CONSOLES

// definindo rota para para obter a página de um servidor
app.get("/consoles", (req, res) => {
  // http://localhost:3000/consoles
  res.send("Consoles - get");
});

// definindo a rota para criar algo novo no servidor 
app.post("/consoles", (req, res) => {
  //http://localhost:3000/consoles
  res.send("Veículo - post");
});

// definição da rota para atualizar alguma coisa existente
app.put("/consoles", (req, res) => {
  // http://localhost:3000/consoles
  res.send("Veículo - put");
});

// definição da rota para excluir algo existente
app.delete("/consoles", (req, res) => {
  // http://localhost:3000/consoles
  res.send("Veículo - delete");
});

// definindo a porta que o servidor rodará
const port = 5000;
app.listen(port, console.log(`Servidor rodando na porta ${port}`));
