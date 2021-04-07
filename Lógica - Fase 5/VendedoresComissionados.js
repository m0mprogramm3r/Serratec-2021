//Os "vendedores comissionados" recebem 5% do valor de cada produto vendido.
//Aqueles que batem a meta de 5 mil em vendas, recebem um adicional de 9% sobre o excedente.
//Seu programa irá receber o valor total de vendas e emitir o recibo de comissão.

const ler = require("prompt-sync")();

var vendas = Number(ler("Vendas Totais: "));
const meta = 5000.0;

if (vendas < meta){
    let comissao = vendas * 0.05;
    console.log("Sua comissão: ", comissao.toFixed(2));
}
else if (vendas > meta){
    comissao = vendas * 0.05;
    let adicional = vendas - meta * 0.09;
    console.log("Sua comissão: ", comissao.toFixed(2));
    console.log("Valor adicional: ", adicional.toFixed(2));
}
