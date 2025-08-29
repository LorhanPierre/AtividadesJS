var input = require('prompt-sync')();

valor = parseInt(input("Digite um valor para saber se o valor é Par: "));
var ePar = false;
function ehPar (a){
    if(a % 2 == 0){
        return ePar = true;
    }else{
        return ePar = false;
    }
}

console.log("O valor é Par? \nR:"+ehPar(valor));