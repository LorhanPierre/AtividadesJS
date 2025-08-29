var input = require('prompt-sync')();

valorA = parseInt(input("Digite um valor: "));
valorB = parseInt(input("Digite o segundo valor para obter o produto dos dois valores: "));

var produtoValorAeB = (a,b) =>{
    return a*b;
}

console.log("Resultado é: "+produtoValorAeB(valorA,valorB));