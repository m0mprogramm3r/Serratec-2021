//Banco de sangue
//Ajude o banco de sangue a fazer a triagem dos voluntários que responderam "sim" para as restrições.

const ler = require("prompt-sync")();

console.log(" == Banco de Sangue ==");
console.log("[Digite Sim ou Não nas restrições a seguir]");

let idade = ler("Idade abaixo de 16 ou acima de 69 anos: ");
let peso = ler("Pesa menos de 50kg: ");
let hep = ler("Portador de hepatite: ");
let mal = ler("Já teve malária: ");
let doa = ler("Fez doação recente: ");

console.log("[Resultado da triagem]");

let res1 = idade ==  16 >= 69;
let res2 = peso == peso >= 50;
let res3 = hep == "nao";
let res4 = mal == "nao";
let res5 = doa == "nao";
let boolean = (idade == "nao" && peso == "nao") && (hep == "nao" && mal == "nao" && doa == "nao");

console.log("Pode doar sangue? " + boolean);