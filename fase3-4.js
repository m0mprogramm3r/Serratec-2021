const prompt = require("prompt-sync")();

let celsius = prompt("Qual temperatura em Celsius você quer converter? Digite aqui: ");

let fahr = (celsius * 9 / 5) + 32
console.log("Boa escolha!");
console.log("A temperatura escolhida em Celsius, é: " + fahr + " graus fahrenheit!");