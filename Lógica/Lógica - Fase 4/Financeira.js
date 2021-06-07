//Financeira
//O programa irá solicitar que o cliente digite seu nome, empresa e função, além do valor do empréstimo que deseja contratar. 
//Então será calculado 86% do valor desejado como crédito disponível.
//A resposta deverá seguir o seguinte exemplo:
//Senhor Moisés, você está com sorte! Pela sua função de programador, e sua excelente relação com a empresa onde trabalha, foi aprovado um crédito em conta corrente de R$200,00.

const ler = require("prompt-sync")();

let nome = ler("Olá, qual é o seu nome?: ");
let empresa = ler("Diga-me, onde trabalha?: ");
let funcao = ler("Qual é a sua função?: ");
let credito = ler("Qual valor do crédito que deseja contratar?: ");

let disponivel = (credito * 86) / 100 

console.log("Senhor(a) " + nome + ", você está com sorte! Pela sua função de " + funcao + ", e sua excelente relação com a empresa onde trabalha, foi aprovado um crédito em conta corrente de R$" + disponivel + ".");