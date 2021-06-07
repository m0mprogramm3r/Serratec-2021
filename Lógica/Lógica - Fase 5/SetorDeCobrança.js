//O setor de cobrança irá acertar os pagamentos com os "fornecedores" na próxima sexta-feira.
//Para valores maiores que mil Reais, o pagamento será em cheque.
//Os valores baixos serão pagos em dinheiro.
//Ao receber o valor do pagamento, o sistema irá emitir um relatório.

const ler = require("prompt-sync")();

var valor = Number(ler("Valor do Pagamento: R$"));

if (valor > 1000){
    console.log("Valor: R$", valor);
    console.log("Pagamento em cheque.");
}
else{
    console.log("Valor: R$", valor);
    console.log("Pagamento em dinheiro.");
}

