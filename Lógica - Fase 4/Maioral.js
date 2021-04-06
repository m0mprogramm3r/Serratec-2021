//Maioral
//Dois amigos vão utilizar o programa. Sem olhar para tela, cada um irá digitar um número inteiro no teclado.
//Vamos descobrir quem digitou o maior número, pelos resultados na tela.

const ler = require("prompt-sync")();
console.log(" == Maioral == ");

let a = ler("Player 1: ");
a = Number(a)
let b = ler("Player 2: ");
b = Number(b)

console.log(" == Resultados == "); 

let res = a > b
console.log("Player 1 venceu? " + res);

res = b > a
console.log("Player 2 venceu? " + res); 

res = a == b
console.log("Houve empate? " + res);