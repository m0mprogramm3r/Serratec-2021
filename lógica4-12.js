//Maioral
//Dois amigos vão utilizar o programa. Sem olhar para tela, cada um irá digitar um número inteiro no teclado.
//Vamos descobrir quem digitou o maior número, pelos resultados na tela.

const ler = require("prompt-sync")();
let boolean = isTooSmall = true

console.log(" == Maioral == ");

let a = ler("Player 1: ");
a = Number(a);

let b = ler("Player 2: ");
b = Number(b);

console.log(" == Resultados == "); 

boolean = a > b;
console.log("Player 1 venceu? " + boolean);

boolean = a < b;
console.log("Player 2 venceu? " + boolean); 

boolean = a == b;
console.log("Houve empate? " + boolean);