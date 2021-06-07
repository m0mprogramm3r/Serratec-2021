//O programa “Compromissos” gerencia a sua agenda do mês.
//Você pode digitar um compromisso, informando o dia e a descrição do evento, e consultar se existe algum apontamento para determinado dia.

const ler = require("prompt-sync")();

let compromisso = []

console.log("Agenda");
let dia = Number(ler("Qual dia quer consultar? "));
var agenda = compromisso[dia]

while (dia > 0) {
    if (agenda) {
        console.log("Esse dia já tem anotações, deseja consultar? ");
    let ver = ler("S ou N: ");

    if (ver == "S"){
        console.log("Compromissos do dia: ", dia);
        console.log(agenda)
    }
} else {
    console.log('Sem compromissos pra esse dia. Digite seus compromissos: ');
    let descricao = ler();
    compromisso[dia] = descricao;
}

dia = ler("Qual dia quer consultar? ");
agenda = compromisso[dia]
}

console.log("Até amanhã!");
