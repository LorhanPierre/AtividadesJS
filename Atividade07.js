var input = require('prompt-sync')();

palavra = input("Digite a uma palavra para verificar se é um palindromo: ");
palindromo = palavra.split('').reverse().join('');

if(palavra == palindromo){
    console.log(`A palavra ${palavra} ao contrário fica ${palindromo} ou seja é um palindromo :)`);
}else{
    console.log(`A palavra ${palavra} ao contrário fica ${palindromo} ou seja não é um palindromo :(`);
}