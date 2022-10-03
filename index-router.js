// importando o módulo express
const express = require("express");

// importando as rotas da aplicação
const consolesRotas = require("./routes/consoles");
const clienteRotas = require("./routes/cliente");

// instanciar o módulo express
const app = express();

// utilizar as rotas definidas em outro arquivo
app.use("/consoles", consolesRotas);
app.use("/cliente", clienteRotas);

// definindo a porta em que o servidor rodará
const port = 5000;
app.listen(port, console.log(`Servidor rodando na porta ${port}`));