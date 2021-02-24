import 'reflect-metadata';
import express from 'express';
import './database';

const app = express();

app.get('/users', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.post('/users', (req, res) => {
  res.json({ message: 'Os dados foram salvos com sucesso!' });
});

app.listen(3000, () => console.log('Server is running!'));
