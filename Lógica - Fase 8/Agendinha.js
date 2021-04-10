//A agendinha de contatos agora pode armazenar até 10 nomes e números de telefone, 
//porém o usuário é quem escolhe em qual posição quer guardar o contato.
//Caso a posição já esteja ocupada, ele será questionado se quer ou não substituir.
//Todos os contatos continuam sendo exibidos ao final. Mas as posições ainda não utilizadas aparecem com o texto <vazio>.

const ler = require("prompt-sync")();

console.log("==== AGENDA DE CONTATOS =====");

var contatos = []
