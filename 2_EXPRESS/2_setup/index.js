const express = require('express')

const app = express()

app.get('/', (requisicao, resposta) => {
    resposta.send("Houshou Marine")
})

app.listen(3000, () => {
    console.log("Servidor do discord")
})