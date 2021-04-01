//Laboratório de álcool em gel
//O laboratório fabricante precisa saber se o produto está atingindo a concentração ideal para desinfecção, que é de 70%.
//Crie um programa onde será preenchida a capacidade da garrafa em mililitros, e o resultado será os volumes de álcool e de gel que precisam ser misturados para o preenchimento do vasilhame.

const prompt = require(prompt-sync")(); 
let garrafa = prompt ("Diga-me: quantos ml tem a garrafa? ");
let alcool = garrafa * 70 / 100
let gel = garrafa - alcool

console.log("Para se fazer álcool em gel em uma garrafa de " + garrafa + 