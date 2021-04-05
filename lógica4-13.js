//Rodízio de CPF
//A prefeitura de Teresópolis estabeleceu o "Rodízio de CPF", onde o dígito final do documento será utilizado para permitir a entrada nas lojas.
//O CPF din

const ler = require("prompt-sync")();
let boolean = isTooSmall = false; 

let dia = ler("Dia (hoje): ");
dia = Number(dia);
let cpf = ler("CPF (após o hífen): ");
cpf = Number(cpf);

dia = dia % 2
cpf = cpf % 2

boolean = dia == cpf

console.log("Autorizado a entrar na loja: " + boolean);