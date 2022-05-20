// inclui o módulo http
var http = require('http');
// inclui o módulo express
var express = require('express');

// cria a variavel app, pela qual acessaremos
// os métodos / funções existentes no framework
// express
var app = express();

// método use() utilizado para definir em qual
// pasta estará o conteudo estatico
app.use(express.static('./public'));
app.set("view engine", "ejs");

function logar(req, resp){

    let login = req.query.Login;
    let senha = req.query.Senha;
    resp.send("Bem Vindo");

};


app.get("/Logar", logar );



// cria o servidor
var server = http.createServer(app);

// define o número da porta que o servidor ouvirá
server.listen(3000);

// mensagem exibida no console para debug
console.log("servidor rodando....");