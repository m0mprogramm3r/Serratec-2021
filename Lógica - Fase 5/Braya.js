//Braya sempre tem a mesma rotina nos fins de semana.
//Pela manhã, tendo sol, vai à praia. 
//Do contrário, aproveita pra estudar.
//À tarde é ainda mais regrado: para o almoço na praia, leva um lanche; em casa, feijoada.
//Após almoçar, assiste televisão e tira um cochilo. 
//Agora ele quer imprimir seus hábitos em papel na sexta, após a previsão do tempo, e colar na porta da geladeira.

const ler = require("prompt-sync")();

var tempo = ler("Olá Braya! Como está o tempo hoje? ");

if (tempo == "sol"){
    let sol = "Manhã: Praia. \n Almoço: Lanche \n Após Almoço: Assistir televisão e cochilar.";
    console.log("Para esse lindo fim de semana de sol: === SEXTA === \n", sol);
    console.log(" === SABADO === \n", sol);
    console.log(" === DOMINGO === \n", sol);
}
else{
    let casa = "Manhã: Estudar. \n Almoço: Feijoada \n Após Almoço: Assistir televisão e cochilar."
    console.log("Para esse fim de semana de tempo fechado: === SEXTA === \n", casa);
    console.log(" === SABADO === \n", casa);
    console.log(" === DOMINGO === \n", casa);
}