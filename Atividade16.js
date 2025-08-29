var input = require('prompt-sync')();

valorA = parseInt(input("Digite o primeiro valor: "));
valorB = parseInt(input("Digite o segundo valor para subtrair do primeiro: "));

function subtrair(a,b){
    return a-b;
}

console.log("Resultado é: "+subtrair(valorA,valorB));