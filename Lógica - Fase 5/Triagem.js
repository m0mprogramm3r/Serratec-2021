//A finalidade do sistema é ajudar o hospital a identificar os pacientes vulneráveis a infecções.
// O enfermeiro irá digitar o nome do paciente, e “marcar” se o “paciente foi vacinado”. Após as entradas, receberá a avaliação na tela.

const ler = require("prompt-sync")();

var paciente = ler("Nome do Paciente: "); 
var vac = Number(ler("Já vacinado? [1]Sim [2]Não // Resposta: ")); 
var infec = (vac == 2)

if (infec){
    console.log("Sujeito a infecção? ", infec);
}
else {
    console.log("Sujeito a infecção? ", infec);
}
