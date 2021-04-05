//Mini-calculadora 
//Após ter dois números inteiros, apresenta as operações de adição, subtração, multiplicação e divisão com eles.

const ler = require("prompt-sync")();

let n1 = parseInt(ler("Digite um número para começarmos: "));
let n2 = parseInt(ler("Digite outro número: "));

console.log("O resultado de " + n1 + " + " + n2 + " é: " + (n1 + n2));
console.log("O resultado de " + n1 + " - " + n2 + " é: " + (n1 - n2));
console.log("O resultado de " + n1 + " x " + n2 + " é: " + (n1 * n2));
console.log("O resultado de " + n1 + " ÷ " + n2 + " é: " + (n1 / n2));