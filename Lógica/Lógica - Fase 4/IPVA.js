//IPVA
//O sistema avisa ao contribuinte o mês de pagamento do tributo, de acordo com o final da placa do carro com 4 dígitos inteiros.
//A resposta do programa será o dígito final da placa. 
//Como informativo, após a resposta, será impressa a tabela completa com os meses de pagamento. 

const ler = require("prompt-sync")();

let placa = ler("Digite a placa do carro: ");
placa = Number(placa);

let final = placa % 10;

console.log("Seu carro é final " + final + ". Confira a tabela de pagamentos: ");
console.log("Final 1, 2, 3, 4, e 5 - Pagamento em Janeiro.");
console.log("Final 6, 7, 8, 9 e 0 - Pagamento em Fevereiro.");