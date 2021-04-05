//Zodíaco
//O astrólogo que escreveu o sistema acredita que os nascidos sob o signo de Aquário são mais inteligentes que os demais.

const ler = require("prompt-sync")();
let boolean = isTooSmall = false;

let mes = ler("Mês do seu nascimento: ");
mes = Number(mes);
let niver = ler("Dia do aniversário: ");
niver = Number(niver);

mes = mes <= 2;
niver = (mes == 1, niver >= 21) && (mes == 2, niver <= 19);

console.log("Você é inteligente? " + boolean);
