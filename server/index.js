// const express = require("express")
// const app = express

const Express = require('express')
const app = Express()

app.get('/', (req, res) =>{
    res.send('e ai negada')
});


app.listen(3001, () => {
    console.log('rodando na porta 3001');
});