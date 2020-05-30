var secret;
var digitsSecret; 
var ERROR = 'ERROR'
var game = false;
function setSecret(){
    secret = 6789
    digitsSecret= numberToDigits(secret);
}
function getSecret(){
    return secret
}

function setGame(){
    randomSecret();
    game=true;
}
function endGame(){
    game=false;
}
function gameStatus(){
    return game;
}
function randomSecret(){
    var band =true;
    while(band){
        band= false
        secret = generateRandom();
        digitsSecret= numberToDigits(secret);
        for (var i = 0; i < 4; i += 1) {
            for (var j = 0; j < 4; j += 1) {
                if(digitsSecret[i]===digitsSecret[j] && i!==j){
                    band = true 
                }
            }
        }
        
    }    
}

function generateRandom(){
    const random = Math.floor(Math.random()*10000);
    return random
}

function guess(guessing){
    var response = ''
    var responseX = ''
    var response_ = ''
    if(guessing=== undefined)
        return ERROR;
    sGuessing= guessing.toString();
    if( isNaN(sGuessing) || sGuessing.indexOf('e') !== -1 || sGuessing.length !== 4)
        return ERROR;

    if(secret===guessing){
        response='XXXX'
        return response   
    }
    var digitsCompare =numberToDigits(guessing)
    for (var i = 0; i < 4; i += 1) {
        if(digitsCompare[i]===digitsSecret[i]){
            responseX +='X';
        }else{
            for (var j = 0; j < 4; j += 1) {
                if(digitsCompare[i]===digitsSecret[j] && i!==j){
                    response_ +='_';
                }
                if(digitsCompare[i]===digitsCompare[j] && i!==j){
                    return ERROR
                }
            }
        }
    }
    response=responseX+response_;

    return response
    
}

function numberToDigits(num){
    var digits = num.toString().split('');
    var realDigits = digits.map(Number)
    return realDigits;
}

module.exports.guess = guess;
module.exports.setSecret = setSecret;
module.exports.randomSecret = randomSecret;
module.exports.setGame = setGame;
module.exports.endGame = endGame;
module.exports.gameStatus = gameStatus;
module.exports.getSecret = getSecret;
