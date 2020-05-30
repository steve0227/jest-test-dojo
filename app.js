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
/*todo en uno
app.get('/codebreaker',(req,res)=>{
    
    if(!CodeBreaker.gameStatus())
    {
        CodeBreaker.setGame();
    }
    console.log(CodeBreaker.getSecret())
    var cod =CodeBreaker.guess(req.query.guess)
    if(cod==='XXXX')
    {
        CodeBreaker.endGame();
    }
    res.json({
        guessing: req.query.guess,
        result: cod
    });
});
*/
app.get('/codebreaker/guessing',(req,res)=>{
    if(CodeBreaker.gameStatus()){
        var cod =CodeBreaker.guess(req.query.guess)
        if(cod==='XXXX'){
            CodeBreaker.endGame();
            
        }
        res.json({
            guessing: req.query.guess,
            result: cod
        });
                
    }else{
        res.json({
            error: 'there is not a game in progress'
        })
    }
});

app.get('/codebreaker/start',(req,res)=>{
    if(!CodeBreaker.gameStatus())
    {
        CodeBreaker.setGame();
        console.log(CodeBreaker.getSecret())
        res.json({
            //secret: CodeBreaker.getSecret(),
            message:'game start'
        })       
    }else{
        res.json({
            error: 'tehre is already a game in progress'
        })
    }
           
});





module.exports = app;