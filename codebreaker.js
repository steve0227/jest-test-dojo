var secret;
var digitsSecret; 
var ERROR = 'ERROR'

function setSecret(){
    secret = 6789
    digitsSecret= numberToDigits(secret);
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
    const random = Math.floor(Math.random()*1000);
    return random
}

function guess(guessing){
    var response = ''
    
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
            response +='X';
        }else{
            for (var j = 0; j < 4; j += 1) {
                if(digitsCompare[i]===digitsSecret[j] && i!==j){
                    response +='_';
                }
                if(digitsCompare[i]===digitsCompare[j] && i!==j){
                    return ERROR
                }
            }
        }
    }


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