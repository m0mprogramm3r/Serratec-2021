//Emancipado
//É considerado emancipado qualquer pessoa a partir dos 21 anos, ou o indivíduo do sexo masculino a partir dos 18 anos.
//Crie um programa para atestar a emancipação do cidadão segundo o ano do seu nascimento.

const ler = require("prompt-sync")();
let atual = 2021;

let sexo = ler("Sexo: ");
let nasc = ler("Ano de nascimento: ");

nasc = atual - nasc
let res1 = sexo == "feminino" && nasc >= 21;
let res2 = sexo == "masculino" && nasc >= 18;
let res = (sexo == "feminino" && nasc >= 21) || (sexo == "masculino" && nasc >= 18);

console.log("Cidadão emancipado? " + res);