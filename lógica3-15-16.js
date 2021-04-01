//Programa Fidelidade
//O programa fidelidade solicitou a criação do sistema "ver meus pontos", onde o cliente consulta seu saldo seu saldo de pontos.
//O cliente digite um número inteiro correspondente aos seus cupons. 
//Cada cupom vale 1 ponto.

const prompt = require("prompt-sync")(); 
let cupons = prompt("Diga-me: quantos cupons você possui? ");
let pontos = cupons * 1
console.log("Hmm.. Deixe me ver... De acordo com os cupons que possui, você tem um total de " + pontos + " saldo em pontos no programa fidelidade!"); 

