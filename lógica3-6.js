//Total de produtos 
//Irá solicitar que o cliente digite quantos produtos irá comprar.
//Depois exibe a mensagem: "Parabéns por comprar x produtos!", substituindo x pela quantidade.

const prompt = require("prompt-sync")();
let x = prompt("Digite quantos produtos você irá comprar: "); 

console.log("Parabéns por comprar " + x + " produtos! Excelente escolha!! :)"); 