var input = require('prompt-sync')();

numeroA = parseInt(input("Digite um número:"));
numeroB = parseInt(input("Digite o segundo número:"));

function somaDeNumeros(a,b){
    return a + b;
}

console.log(somaDeNumeros(numeroA,numeroB));