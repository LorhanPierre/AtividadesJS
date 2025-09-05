var input = require('prompt-sync')();

function calcularMedia(values){
    
    var resultadoSoma = 0

    for(let i = 0; i <= values.length - 1; i++){
        resultadoSoma += values[i];
    }
    console.log(resultadoSoma);

    var media = resultadoSoma / values.length;

    return media;
}

var finalizar = false;
var valores = [];

do{

    console.log("----------------------------");
    console.log("   calculadora de media")
    console.log("----------------------------");
    console.log(" 1 - Adicionar valor");
    console.log(" 2 - Calcular");
    console.log("----------------------------");
    let escolha = parseInt(input(":"));

    switch (escolha){
        case 1:
            let valor = parseFloat(input("valor: "));
            valores.push(valor); 
        break;
        case 2: 
        console.log(calcularMedia(valores))
        finalizar = true; 
        break;
    }

}while(!finalizar);


