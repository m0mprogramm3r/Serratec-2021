//Mini-calculadora 
//Após ter dois números inteiros, apresenta as operações de adição, subtração, multiplicação e divisão com eles.

const prompt = require("prompt-sync")();

let n1 = prompt("Digite um número para começarmos: ");
let n2 = prompt("Digite outro número: ");

console.log("O resultado de " + n1 + " + " + n2 + " é " n1 + n2);
console.log("O resultado de " + n1 + " - " + n2 + " é " n1 - n2);
console.log("O resultado de " + n1 + " x " + n2 + " é " n1 * n2);
console.log("O resultado de " + n1 + " ÷ " + n2 + " é " n1 / n2); 

