var input = require('prompt-sync')();

numero = parseInt(input("Digite um número para saber se ele é positivo ou negativo:"));

if(numero > 0){
    console.log("Número é positivo!");
}else if(numero < 0){
    console.log("Número é negativo!");
}else{
    console.log("O número é 0");
};
