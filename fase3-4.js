const prompt = require("prompt-sync")();

let celsius = prompt("Qual temperatura em Celsius você quer converter? Digite aqui: ");

let fahr = (celsius * 9 / 5) + 32
console.log(