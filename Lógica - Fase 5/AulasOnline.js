//Mesmo com aulas online, os alunos do cursinho continuam sendo avaliados com duas provas, a P1 e a P2, que valem 5 pontos inteiros cada.
//Pela soma dos pontos, o aluno saberá sua situação na disciplina.
//Reprovado = 0 a 4 |Recuperação = 4 a 6 |Aprovado = 6 a 8 |Destaque = 8 a 10

const ler = require("prompt-sync")();

var p1 = parseFloat(ler("Valor da Primeira Prova: "));
var p2 = parseFloat(ler("Valor da Segunda Prova: "));

var soma = p1 + p2 

if (soma < 4){
    console.log("ALUNO REPROVADO");
}
else if (soma < 6){
    console.log("ALUNO EM RECUPERAÇÃO");
}
else if (soma < 8){
    console.log("ALUNO APROVADO");
}
else{
    console.log("ALUNO DESTAQUE!! APROVADO COM EXELÊNCIA!");
}