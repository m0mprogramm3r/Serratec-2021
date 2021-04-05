//Banco de sangue
//Ajude o banco de sangue a fazer a triagem dos voluntários que responderam "sim" para as restrições.

const ler = require("prompt-sync")();
let boolean = isTooSmall = false;

console.log(" == Banco de Sangue ==");
console.log("[Digite "Sim" ou "Não" nas restrições a seguir]");

let idade = ler("Idade abaixo de 16 ou acima de 69 anos: ");
idade = boolean(idade);

let peso = ler("Pesa menos de 50kg: ");
peso = boolean(peso);

let hep = ler("Portador de hepatite: ");
hep = boolean(hep);

let mal = ler("Já teve malária: ");
mal = boolean(mal);

let doa = ler("Fez doação recente: ");
doa = boolean(doa);

console.log("[Resultado da triagem]");

boolean = (idade, peso, hep, mal, doa == "não") == true;
console.log("Pode doar sangue? " + boolean);