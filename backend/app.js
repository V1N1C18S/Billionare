const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

// Middlewares
app.use(cors()); // Permite requisições de qualquer origem
app.use(express.json()); // Parseia o corpo das requisições em JSON
app.use(morgan('dev')); // Loga as requisições no terminal
app.use(helmet()); // Adiciona headers de segurança

// Rotas
app.get('/', (req, res) => {
  res.send('Bem-vindo à plataforma de ideias!');
});

// Inicialização do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});