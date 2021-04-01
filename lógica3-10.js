//O dobro
//Um programa que solicita um número, calcula o dobro do valor, e devolve a mensagem:
//"O dobro de x foi y". Substituindo x e y pelos valores.

const prompt = require("prompt-sync")();

let x = prompt("Digite um número: ");
let y = x * 2

console.log("O número de " + x + " foi " + y + " ! :)");