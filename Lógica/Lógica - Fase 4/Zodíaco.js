//Zodíaco
//O astrólogo que escreveu o sistema acredita que os nascidos sob o signo de Aquário são mais inteligentes que os demais.

const ler = require("prompt-sync")();

let mes = ler("Mês do seu nascimento: ");
let dia = ler("Dia do aniversário: ");

let inicio = mes == 1 && dia >= 21;
let fim = mes == 2 && dia <= 19;

let resposta = (mes == 1 && dia >= 21) || (mes == 2 && dia <= 19);

console.log("Você é inteligente? " + resposta);