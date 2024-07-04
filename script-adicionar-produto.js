var conectarBancoDeDados = require("./conectar-banco-de-dados");


function adicionarProduto(event) {
  event.preventDefault();

  var nomeProduto = document.getElementById('nome_produto').value;
  var quantidadeProduto = document.getElementById('quantidade').value;
  var codigoProduto = document.getElementById('codigo_produto').value;
  var marcaProduto = document.getElementById('marca').value;

  console.log(nomeProduto, quantidadeProduto, codigoProduto, marcaProduto);

  var queryInserir = `INSERT INTO produtos (nome, quantidade, codigo_produto, marca) VALUES ('${nomeProduto}', ${quantidadeProduto}, '${codigoProduto}', '${marcaProduto}')`;

  conectarBancoDeDados.query(queryInserir, function(error) {
    if(error) {
      console.log('Ocorreu um erro ao adicionar o produto:')
    } else {
      alert('Produto adicionado com sucesso!')
    }
  })
}

var formulario = document.getElementById('formulario')
formulario.addEventListener('submit', adicionarProduto)