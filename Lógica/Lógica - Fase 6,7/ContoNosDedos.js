//No programa “Conto nos dedos”, a criança diz até qual número quer contar, e os números aparecem na tela em sequência.
//Ela vai experimentar vários números, até que digite um zero para parar de contar.

const ler = require("prompt-sync")();

do {
    var nro = Number(ler("Até quanto você quer contar? "));
for(i = 0; i < nro; i++){
    console.log(i+1)
  }
}while( nro != 0 );
    