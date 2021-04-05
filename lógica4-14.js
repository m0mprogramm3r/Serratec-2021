//Entrada da loja
//O aplicativo na entrada da loja possui internamente um limite de pessoas que podem estar dentro do estabelecimento ao mesmo tempo.
//Toda vez que um cliente quiser entrar, o segurança irá preencher a quantidade de pessoas já na loja, e o programa avisará se o cliente pode prosseguir.

const ler = require("prompt-sync")();

let boolean = isTooSmall = false
let limite = 5;
let dentro = ler("Quantas pessoas há dentro da loja?: ");
dentro = Number(dentro);

let entrar = ler("Quantas pessoas estão querendo entrar na loja?: ");
entrar = Number(entrar);

let res = dentro + entrar;
boolean = res <= limite

console.log("Pode prosseguir?: " + boolean);