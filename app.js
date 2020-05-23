const express = require('express');
const app= express();
const cal = require('./calculator');
const CodeBreaker = require('./codebreaker');


app.get('/add',(req,res)=>{
    res.json({
        result: cal.add(parseInt(req.query.value1),parseInt(req.query.value2))
    });
});

app.get('/subtract',(req,res)=>{
    res.json({
        result: cal.subtract(parseInt(req.query.value1),parseInt(req.query.value2))
    });
});

app.get('/codebreaker',(req,res)=>{
    CodeBreaker.setSecret();
    var cod =CodeBreaker.guess(req.query.guess)
    /*if(cod==='XXXX')
    CodeBreaker.randomSecret();*/
    res.json({
        guessing: req.query.guess,
        result: cod
    });
});

module.exports = app;