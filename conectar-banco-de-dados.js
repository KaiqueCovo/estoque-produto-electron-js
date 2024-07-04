// Importando o módulo mysql2
var mysql = require("mysql2");

// Configuração para acessar o banco de dados
var conectarBancoDeDados = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "electron-teste",
});

// Verificar conexão com o banco de dados
conectarBancoDeDados.connect(function (error) {
  if (error) {
    console.log(`Ocorreu um erro ao conectar no banco de dados: ${error.code}`);
    console.log(
      `Ocorreu um erro ao conectar no banco de dados: ${error.fatal}`
    );
  } else {
    console.log("Conectado ao banco de dados com sucesso!");
  }
});

module.exports = conectarBancoDeDados;