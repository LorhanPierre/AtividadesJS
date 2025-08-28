var input = require('prompt-sync')();

for(let multiploDeTres = 1; multiploDeTres <= 30; multiploDeTres++){
    var resultadoMultiplos = multiploDeTres % 3;
    if(resultadoMultiplos == 0){
        console.log(multiploDeTres);
    }
}