const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para parsing do corpo das requisições
app.use(express.json());

// Servindo o arquivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para POST
app.post('/dados', (req, res) => {
  const data = req.body;
  res.send(`Dados recebidos: ${JSON.stringify(data)}`);
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
