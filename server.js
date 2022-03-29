const express = require("express")       //require o modulo express
const bodyParser = require("body-parser") //require o modulo body parser que permite o metodo POST
const app = express()               // chama o método express


app.use(bodyParser.urlencoded({extended: true }))  
app.use(bodyParser.urlencoded({extended: true})) // urlencoded pq é um formulario
  

//GETS

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
})   // metodo get da pagina home, que quando o usuario clica nela o servidor manda como resposta um arquivo localizado no path + o nome do arquivo a ser enviado

app.get("/imcCalculadora", function (req, res){
    res.sendFile(__dirname + "/imcCalculadora.html")
})



//POSTS

app.post("/imcCalculadora", function(req, res){

var peso = parseFloat(req.body.peso)
var altura = parseFloat(req.body.altura)

var resultado = peso / (altura * altura)

res.send("O seu resultado é: " + resultado)


})

app.post("/", function(req, res){

    var num1 = parseInt(req.body.num1)
    var num2 = parseInt(req.body.num2) 
    var result = num1 + num2

    res.send("O resultado é: " + result)
    
}) //metodo post(body-parser) que recebe todas as interações do usuario com o form do html q vc mandou la no get, no html o form ta com method=post, ele possibilita acessar o valor dos inputs, dai faz a conta e manda como resposta o resultado

app.listen(3000, function () {
    console.log('Servidor iniciado')
})      //criar um servidor


