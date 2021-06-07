//No tablet da lanchonete, o cliente agora pode escolher três complementos.
//E os pedidos também ganharam mais opções!
//Q= queijo, B= bacon, A= alface, T= tomate, P= picles, C= cebola, O= ovo frito

const ler = require("prompt-sync")();

console.log("=== LANCHONETE ===");

var pao = Number(ler("Qual tipo de pão você deseja? Digite [1] Pão de Hambúrguer [2] Pão Austriliano : "));
var molho = Number(ler("Você deseja adicionar molho? [1] Sim [2] Não : "));
var complementos = ler("Escolha um complemento: [Q] queijo, [B] bacon, [A] alface, [T] tomate, [P] picles, [C] cebola, [O] ovo frito: ");

console.log("===============");

if (pao == 1){
    pao = "Pão de Hambúrguer"
    console.log(" Pão:",pao)
}
else if (pao == 2){
    pao = "Pão Australiano"
    console.log("Pão:",pao)
}
if (molho == 1){
    molho = "Sim"
    console.log("Molho:",molho)
}
else if (molho == 2){
    molho = "Não"
    console.log("Molho:",molho)
}
switch (complementos) {
    case ("Q"):
        console.log("Queijo");
        break;

    case ("B"):
        console.log("Bacon");
        break;

    case ("A"):
        console.log("Alface");
        break;

    case ("T"):
        console.log("Tomate");
        break;

    case ("P"):
        console.log("Picles");
        break;

    case ("C"):
        console.log("Cebola");
        break;

    case ("O"):
        console.log("Ovo Frito");
        break;
}
console.log("==============================")
console.log("O pedido está sendo preparado.")