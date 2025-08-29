var input = require('prompt-sync')();

var resultado = 0;
for(let quantidadeDeElementos = 1; quantidadeDeElementos <= 100; quantidadeDeElementos++){
    resultado += quantidadeDeElementos; 
}
console.log(resultado);