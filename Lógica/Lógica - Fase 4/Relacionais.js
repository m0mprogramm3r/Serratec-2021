//Relacionais
//O programa lê os inteiros A e B. 
//Utilizando variáveis boolean, escreva na tela o resultado de cada operação relacional com os números.

const ler = require("prompt-sync")();

let a = ler("Digite um número: ");
a = Number.parseInt(a);
let b = ler("Digite outro número: ");
b = Number.parseInt(b);

let res 
res = a > b
console.log("a é maior que b? " + res);

res = a < b;
console.log("a é menor que b? " + res);

res = a <= b;
console.log("a é menor ou igual a b? " + res);

res = a >= b;
console.log("a é maior ou igual a b? " + res);

res = a == b;
console.log("a é igual b? " + res);

res = a != b;
console.log("a é diferente de b? " + res);