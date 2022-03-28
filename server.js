const express = require("express")       //require o modulo express
const bodyParser = require("body-parser") //require o modulo body parser que permite o metodo POST

const app = express()               // chama o método express
app.use(bodyParser.urlencoded({ extended: true }))    // pra usar o body parser tem que usar essa estrutura toda, só mudando o método, esse urluncoded é específico pra pegar o metodo POST de um formulario

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
})   // metodo get da pagina home, que quando o usuario clica nela o servidor manda como resposta um arquivo localizado no path + o nome do arquivo a ser enviado. ou seja get é literalmente o metodo que exibe as coisas pro usuario.

app.post("/", function(req, res){

    var num1 = parseInt(req.body.num1)
    var num2 = parseInt(req.body.num2) 
    var result = num1 + num2

    res.send("O resultado é: " + result)
    
}) //metodo post que recebe todas as interações do usuario com o form do html q vc mandou la no get, no html o form ta com method=poat, ele possibilita acessar o valor dos inputs, dai faz a conta e manda como resposta o resultado

app.listen(3000, function () {
    console.log('pegou')
})      //criar um servidor


