var input = require('prompt-sync')();

valorTemperaturaCelsius = parseFloat(input("Digite um valor(celcius) para converter em Fahrenheit: "));

var conversao = (valorTemperaturaCelsius * (9/5)) + 32;

console.log(`Resultado da conversão é ${conversao} °F`);