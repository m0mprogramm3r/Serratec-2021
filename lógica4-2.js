//Bem-vindo
//O programa pergunta seu nome e sobrenome, e depois gentilmente te cumprimenta. 

const prompt = require("prompt-sync")();

let nome = prompt("Diga-me seu nome: ");
let sobrenome = prompt("E agora, o seu sobrenome: ");

console.log("Olá " + nome + sobrenome + " seja bem-vindo ao universo da programação!");
