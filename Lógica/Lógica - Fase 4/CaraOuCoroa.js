//Cara ou Coroa
//O programa irá funcionar assim: O sistema irá solicitar um número, o jogador irá digitar o valor que preferir.
//O programa então irá exibir uma mensagem em texto fixo, onde a única variável é o resultado da moeda.
//Para "jogar a moeda", considere o número digitado: sendo par é cara, sendo ímpar é coroa.

const ler = require("prompt-sync")();
let res
console.log("== Cara ou Coroa ==")

console.log("Como está sua sorte?")
let a = ler("Jogue a moeda (digite qualquer número): ");

a = a % 2

res = a

console.log("Veja o resultado abaixo: Sendo 0 = Cara e 1 = Coroa")
console.log("O resultado é: " + res);