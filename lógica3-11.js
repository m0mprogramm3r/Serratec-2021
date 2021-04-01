//Quadrado
//O programa terá um código adaptado do item anterior, para calcular o quadrado do número digitado.

const prompt = require("prompt-sync")();

let x = prompt("Digite um número: ");
let y = x * x

console.log("O número de " + x + " foi " + y + " ! :)");