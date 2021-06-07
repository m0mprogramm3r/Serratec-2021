//Adaptar o aplicativo do “Banco de sangue”, criando duas novas versões:
//Alterar a mensagem de resultado, para dizer quais motivos impediram o voluntário de participar da doação (ou parabenizar quando aprovado).
//Assim que a primeira restrição for atendida, não serão feitas as  perguntas subsequentes.

const ler = require ("prompt-sync")();

console.log ("=== Banco de sangue ===");
console.log ("[Digite 'Sim' ou 'Não' nas restrições a seguir]");

var idade = ler("Idade abaixo de 16 ou acima de 69 anos: ");
var peso = ler("Pesa menos de 50kg: ");
var hepatite = ler("Portador de Hepatite: ");
var malaria = ler("Já teve Malária: ");
var recente = ler("Fez doação recente: ");

var res = idade == "Sim" || peso == "Sim" || hepatite == "Sim" || malaria == "Sim" || recente == "Sim"

if (res){
    console.log("Pode realizar a doação? ", res);
}
else{
    console.log("Pode ser feita a doação? ", res)
}
if (idade == "sim"){
    console.log("Pois você é menor de 18 anos.");
}
if (hepatite == "sim"){
    console.log("Pois você é portador de hepatite.");
}
if (recente == "sim"){
    console.log("Pois você doou sangue a menos de 3 meses.");
}
