//Pandemia
//Em tempos de pandemia, só é permitido entrar em templos religioso pessoas de máscara.
//Na portaria deve ser medida a temperatura à distância, e o valor não deve ultrapassar 37,5°.

const ler = require("prompt-sync")();
let boolean 

let mascara = ler("Usa máscara: ");
mascara = String(mascara);

let temperatura = ler("Temperatura: ");
temperatura = Number(temperatura);

mascara = mascara == "sim"
temperatura = temperatura <= 37,5 

boolean = (mascara) && (temperatura);

console.log("Autorizar a entrada? " + boolean);