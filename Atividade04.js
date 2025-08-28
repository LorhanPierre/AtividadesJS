var input = require('prompt-sync')();

console.log("  Calculadora de Fatorial");
console.log("---------------------------");

numero = parseInt(input("Digite o número que deseja saber o Fatorial:"));
var resultado = numero;

for(let numeros = numero - 1; numeros >= 1; numeros-- ){
    var resultado = numeros * resultado; 
}

console.log(resultado);