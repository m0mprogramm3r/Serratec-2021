//O sistema “anfitrião” decidiu melhorar a ortografia nos ingressos impressos, tanto nos plurais quanto na quantidade de visitas.

const ler = require("prompt-sync")();

var ingressos = Number(ler("Visitas: "));

if (ingressos == 1){
    console.log("Você já nos visitou uma vez.");
}
else{
    console.log("Você já nos visitou", ingressos, "vezes.")
}