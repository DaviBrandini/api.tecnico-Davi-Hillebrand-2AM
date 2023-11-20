// controllers/produtosController.js
 
const listarProdutos = (req, res) => {
    // Lógica para listar produtos
    res.json({ message: 'Lista de produtos' });
  };
   
  const cadastrarProduto = (req, res) => {
    // Lógica para cadastrar produto
    res.json({ message: 'Produto cadastrado com sucesso' });
  };
   
  const editarProduto = (req, res) => {
    // Lógica para editar produto
    res.json({ message: 'Produto editado com sucesso' });
  };
   
  const deletarProduto = (req, res) => {
    // Lógica para deletar produto
    res.json({ message: 'Produto deletado com sucesso' });
  };
   
  module.exports = {
    listarProdutos,
    cadastrarProduto,
    editarProduto,
    deletarProduto,
  };
