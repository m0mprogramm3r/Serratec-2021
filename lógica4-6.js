//Mini departamento pessoal
//O programa lê a quantidade de horas trabalhadas por um funcionário em um mês, o valor que ele recebe por hora e o percentual de desconto para o INSS e calcula:
//Salário bruto, valor do desconto para o INSS e o salário líquido.

const ler = require("prompt-sync")();

let horas = (ler("Quantas horas são trabalhadas por mês? ");
let valorhr = (ler("Quanto recebe por hora? ");
let insspercen = (ler("Qual o percentual de desconto para o INSS? ");
let salariobruto = horas * valorhr
let inss = salariobruto / insspercen
let salarioliquido = salariobruto - inss

console.log("C O N T R A - C H E Q U E");
console.log("Seu salário bruto é: R$" + salariobruto);
console.log("O valor do desconto do INSS é: R$" + inss);
console.log("E o seu salário liquido é: R$" + salarioliquido);