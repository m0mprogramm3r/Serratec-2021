//Rodízio de CPF
//A prefeitura de Teresópolis estabeleceu o "Rodízio de CPF", onde o dígito final do documento será utilizado para permitir a entrada nas lojas.
//O CPF final "par" somente pode sair nos dias pares, e de igual modo, o dia ímpar é destinado aos documentos ímpares.

const ler = require("prompt-sync")();
let boolean 

let dia = ler("Dia (hoje): ");
let cpf = ler("CPF (após o hífen): ");

dia = dia % 2
cpf = cpf % 2

boolean = dia == cpf

console.log("Autorizado a entrar na loja: " + boolean);