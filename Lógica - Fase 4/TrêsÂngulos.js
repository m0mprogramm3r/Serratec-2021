//Três ângulos
//O programa lê os valores dos ângulos de uma forma, e escreve se as medidas formam um triângulo válido.

const ler = require("prompt-sync")();
let boolean = isTooSmall = false;

let l1 = ler("Digite o primeiro ângulo: ");
l1 = Number(l1);
let l2 = ler("Digite o segundo ângulo: ");
l2 = Number(l2);
let l3 = ler("Digite o terceiro ângulo: ");
l3 = Number(l3);

let tri = l1 + l2 + l3 == 360;
boolean = tri;
console.log("O triângulo é: " + tri);