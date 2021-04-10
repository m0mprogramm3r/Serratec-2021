//Vou tomar a tabuada! O aluno de matemática escolhe o número, e o sistema lhe ensina a contar.

const ler = require("prompt-sync")();

var n1 = Number(ler("Digite um número: "));

for(i = 1; i < 10; i++){
    var tab = n1 * i
    var resultado = tab
    console.log(n1,"x",tab,"=",resultado)
}
  