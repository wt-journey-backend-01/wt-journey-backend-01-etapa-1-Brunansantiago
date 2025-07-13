const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form method="POST" action="/enviar">
      <input name="nome" placeholder="Digite seu nome" />
      <button type="submit">Enviar</button>
    </form>
  `);
});

app.post('/enviar', (req, res) => {
  const nome = req.body.nome;
  res.send(`Olá, ${nome}! Dados recebidos com sucesso.`);
});

app.get('/api', (req, res) => {
  res.json({ mensagem: 'API simulada funcionando!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

