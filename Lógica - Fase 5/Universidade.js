//Os boletos da "Universidade" são emitidos com vencimento no dia 15 do mês.
//Para os pagamentos recebidos entre os dias 10 a 13, será concedido um desconto na próxima mensalidade.
//O programa irá receber o número do boleto e o dia do pagamento, e emitir o extrato.

const ler = require("prompt-sync")();

var hoje = Number(ler("Digite o dia de hoje: "));
var boleto = Number(ler("Digite o número do boleto: "));
var pag = Number(ler("Digite o dia do pagamento: "));

var res = (pag >= 10 && pag <= 13);

if (res){
    console.log("Desconto na próxima mensalidade? ", res);
}
else {
    console.log("Desconto na próxima mensalidade? ", res);
}