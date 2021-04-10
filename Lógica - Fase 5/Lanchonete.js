//No tablet da lanchonete, o cliente pode escolher dois complementos para o seu lanche.
//Apenas se marcar algum item de salada, pode também escolher se quer adicionar molho.
//Ao finalizar, o pedido é enviado para a cozinha.

const ler = require("prompt-sync")();

console.log("=== LANCHONETE ===");

var pao = Number(ler("Qual tipo de pão você deseja? Digite [1] Pão de Hambúrguer [2] Pão Austriliano : "));
var salada = Number(ler("Escolha um item de salada: [0] Sem salada [1] Tomate [2] Alface : "));
var molho = Number(ler("Você deseja adicionar molho? [1] Sim [2] Não : "));

console.log("===============");

if (pao == 1){
    pao = "Pão de Hambúrguer"
    console.log(" Pão:",pao)
}
else if (pao == 2){
    pao = "Pão Australiano"
    console.log("Pão:",pao)
}
if (salada == 0){
    salada = "Sem salada"
    console.log("Salada:",salada)
}
else if (salada == 1){
    salada = "Tomate"
    console.log("Salada:",salada)
}
else if (salada == 2){
    salada = "Alface"
    console.log("Salada:",salada)
}
if (molho == 1){
    molho = "Sim"
    console.log("Molho:",molho)
}
else if (molho == 2){
    molho = "Não"
    console.log("Molho:",molho)
}

console.log("==============================")
console.log("O pedido está sendo preparado.")