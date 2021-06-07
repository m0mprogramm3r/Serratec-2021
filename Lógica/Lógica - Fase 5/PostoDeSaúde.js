//O posto de Saúde irá vacinar hoje contra a Covid os cidadãos com 67 anos.
//Ao entrar, deve ser solicitada a idade, para então exibir as mensagens de direcionamento:
//Acima de 67 anos = Por quê não vacinou ainda?
//Abaixo de 67 anos = Volte na próxima semana
//67 anos completos = Vacinação hoje.

const ler = require("prompt-sync")();

console.log("=== IMUNIZANTE DA COVID-19 ===");
var idade = Number(ler("Digite a sua idade: "));

if (idade == 67){
    console.log("=== VACINAÇÃO HOJE ===");
}
else if (idade < 67){
    console.log("=== VOLTE NA PRÓXIMA SEMANA ===");
}
else{
    console.log("=== POR QUÊ NÃO VACINOU AINDA SER HUMANINHO? ===");
}