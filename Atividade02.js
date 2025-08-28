var input = require("prompt-sync")();

console.log("  Calculadora de Média");
console.log("------------------------");
var totalNotas = 0;

for(let quantiaDeNotas = 1; quantiaDeNotas <= 3; quantiaDeNotas++){
    notas = parseFloat(input("Digite a "+quantiaDeNotas+"° nota:" ));
    totalNotas += notas;
}

var media = totalNotas / 3;
console.log(media); 