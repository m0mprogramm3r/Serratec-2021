//Emancipado
//É considerado emancipado qualquer pessoa a partir dos 21 anos, ou o indivíduo do sexo masculino a partir dos 18 anos.
//Crie um programa para atestar a emancipação do cidadão segundo o ano do seu nascimento.

const ler = require("prompt-sync")();
let boolean = isTooSmall = false;

let sexo = ler("Sexo: ");
sexo = String(sexo);

let nasc = ler("Ano de nascimento: ");
nasc = Number(nasc);

let atual = 2021;
sexo = (sexo = "feminino"), (sexo = "masculino");
nasc = atual - nasc
boolean == (sexo) && (nasc);

console.log("Cidadão emancipado? " + boolean);