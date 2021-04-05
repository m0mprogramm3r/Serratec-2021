//Bem-vindo
//O programa pergunta seu nome e sobrenome, e depois gentilmente te cumprimenta. 

const ler = require("prompt-sync")();

let nome = ler("Diga-me seu nome: ");
let sobrenome = ler("E agora, o seu sobrenome: ");

console.log("Olá " + nome + " " + sobrenome + " seja bem-vindo ao universo da programação!");