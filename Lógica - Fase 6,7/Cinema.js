//A bilheteria do cinema reservou todas as poltronas terminadas em 6 para deficientes.
//A sala de projeção possui 40 lugares, e para cada um, o sistema irá imprimir se o ingresso pode ser vendido ou não.

const ler = require("prompt-sync")();

    do {
        var bilhete = Number(ler("Digite a poltrona que quer reservar: "));
        if((bilhete != 6) && (bilhete != 16) && (bilhete != 26) && (bilhete != 36)){
            console.log("Seu assento foi reservado! Aproveite o filme!")
        }else{
    switch (bilhete) {
        case (6):
        console.log("Assento Preferêncial. Escolha outra poltrona.");
        break;

        case (16):
        console.log("Assento Preferêncial. Escolha outra poltrona.");
        break;

        case (26):
        console.log("Assento Preferêncial. Escolha outra poltrona.");
        break;

        case (30):
        console.log("Assento Preferêncial. Escolha outra poltrona.");
        break;
    }
}
    }while (bilhete);
    