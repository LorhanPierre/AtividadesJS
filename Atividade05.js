var input = require("prompt-sync")();

ano = parseInt(input("Digite um ano para saber se ele é bissexto:"));

if((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)){
    console.log(`O ano ${ano} é bissexto`);
}else{
    console.log(`O ano ${ano} não é bissexto`);
}