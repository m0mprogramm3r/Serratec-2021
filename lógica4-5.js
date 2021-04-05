//Self-service
//O restaurante precisa de um programa para imprimir as etiquetas da "comanda" na pesagem dos pratos. 
//O operador da balança irá digitar o preço do quilo e o total em gramas da refeição, considerando que o prato vazio pesa 465g(tara).
//A etiqueta irá conter o nome do restaurante, a tara do prato, o preço de 100g, o peso consumido e o valor total.

const ler = require("prompt-sync")();

let preco = ler("Valor do quilo: ");
let gramas = ler("Total em gramas da refeição: ");
let tara = 0465;
let p100 = preco / 10;
let total = (gramas + tara) * p100;


console.log("Restaurante bucho cheio");
console.log("Tara do prato: " + tara + " gramas");
console.log("Valor de 100g: R$" + p100);
console.log("Consumo: " + gramas + " gramas"); 
console.log("Total: R$" + total);