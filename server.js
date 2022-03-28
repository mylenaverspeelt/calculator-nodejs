const express = require("express")       //require o modulo express

const app = express()               // chama o método express

app.get("/", function (req, res){
    res.sendFile(__dirname + "/index.html")
})   // a barra é o home, o response é um arquivo dentro do path do projeto


app.listen(3000, function (){
    console.log('pegou')
})      //criar um servidor


