//O “mini DP” aumentou seus cálculos. 
//Agora, considere a jornada de trabalho semanal de um funcionário, que é de 40 horas.
//O funcionário que trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%.
//Considerando que o mês possui 4 semanas exatas, e que a entrada de horas será um valor maior que a jornada normal.
//a- Salário base (valor da hora * horas normais)
//b- Valor de horas extras
//c- Valor do desconto para o INSS
//d- Salário líquido (Salário base + horas extras – desconto INSS)
//e- Imprimir na tela o contracheque do funcionário.

const ler = require("prompt-sync")();

const horas = 160

var valorhr = parseFloat(ler("Quanto recebe por hora? R$"));
var inss = parseFloat(ler("Qual o valor do desconto para o INSS? "));
var extras = Number(ler("Quantas horas extras foram feitas? Separar horas de minutos com um .: "));

var salariobase = valorhr * horas
extras = extras * valorhr
var salarioliquido = salariobase + extras - inss

console.log("C O N T R A - C H E Q U E");
console.log("Seu salário base é: R$" + salariobase);
console.log("O valor do desconto do INSS é: R$" + inss);
console.log("E o seu salário liquido é: R$" + salarioliquido);
