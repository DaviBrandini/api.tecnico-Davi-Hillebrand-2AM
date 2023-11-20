const express = require('express');
const bodyParser = require('body-parser');
 
const app = express();
const PORT = 3005;
 
app.use(bodyParser.json());
 
app.get('/produtos', produtosController.listarProdutos);
app.post('/produtos', produtosController.cadastrarProduto);
app.put('/produtos/:id', produtosController.editarProduto);
app.delete('/produtos/:id', produtosController.deletarProduto);
 
 
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});