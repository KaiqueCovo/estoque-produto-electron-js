// Importando o módulo mysql2
var mysql = require("mysql2");
const deletarProduto = require("./script-excluir-produto");

// Configuração para acessar o banco de dados
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "electron-teste",
});

// Verificar conexão com o banco de dados
connection.connect(function (error) {
  if (error) {
    console.log(`Ocorreu um erro ao conectar no banco de dados: ${error.code}`);
    console.log(
      `Ocorreu um erro ao conectar no banco de dados: ${error.fatal}`
    );
  } else {
    console.log("Conectado ao banco de dados com sucesso!");
  }
});

// Buscar todos os produtos
var queryBuscar = "SELECT * FROM produtos"

connection.query(queryBuscar, function (error, produtos) {
  if(error) {
    console.log(`Ocorreu um erro ao buscar os produtos: ${error.code}`)
    console.log(`Ocorreu um erro ao buscar os produtos: ${error.fatal}`)
  } else {
    console.log(produtos)

    // Exibir os produtos na tela
    var listaProdutos = document.getElementById("lista-produtos")
  
    produtos.forEach(produto => {
      // Criar um item da lista
      var criarItem = document.createElement("li")
      criarItem.innerText = produto.nome
      criarItem.className = "item"
      criarItem.id = produto.id
      criarItem.onclick = deletarProduto

      // Criar a div com os ícones
      var criarDiv = document.createElement("div")
      criarDiv.className = "icones-de-acao"
      criarItem.appendChild(criarDiv)

      // Criar ícone de editar
      var criarIconeEditar = document.createElement("img")
      criarIconeEditar.className = "icone-editar"
      criarIconeEditar.alt = "Editar produto"
      criarIconeEditar.src = "./images/icone-editar.png"
      criarIconeEditar.onclick = function() {
        console.log("editar produto")
        window.location.href = `./editar-produto.html`
      }

       // Criar ícone de excluir
      var criarIconeExcluir = document.createElement("img")
      criarIconeExcluir.className = "icone-excluir"
      criarIconeExcluir.alt = "Excluir produto"
      criarIconeExcluir.src = "./images/icone-excluir.png"

      // Adicionar os ícones na div
      criarDiv.appendChild(criarIconeEditar)
      criarDiv.appendChild(criarIconeExcluir)

      // Adicionar a li na ul
      listaProdutos.appendChild(criarItem)
    })
  }
})
