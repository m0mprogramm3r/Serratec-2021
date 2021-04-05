//Vote no 20
//No programa, após solicitar sua idade, o sistema apresenta se o indivíduo já pode exercer sua cidadania nas urnas.

const ler = require("prompt-sync")();
let boolean 

console.log(" == Eleições 2020 == ");

let a = ler("Digite sua idade: ");
let b = 16;

boolean = a >= b;
console.log("Você já pode votar? " + boolean);