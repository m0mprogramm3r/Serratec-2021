//Educado
//O programa irá perguntar seu nome e como gostaria de ser chamado. 
//Depois disso, uma saudação para você aparece na tela. 

const ler = require("prompt-sync")();

let nome = ler("Olá, qual seu nome?: ");
let sobrenome = ler("Que bonito!! Agora me diga, qual seu sobrenome?: ");

console.log("Tenha um excelente dia com muito sucesso, " + nome + " " + sobrenome + " !");