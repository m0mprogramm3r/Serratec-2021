const ler = require("prompt-sync")();

let a = ler("Digite um número: ");
a = Number(a);
let b = ler("Digite outro número: ");
b = Number(b);

let boolean = isTooSmall = false
boolean = a > b
console.log("a é maior que b? " + boolean);

boolean = a < b;
console.log("a é menor que b? " + boolean);

boolean = a <= b;
console.log("a é menor ou igual a b? " + boolean);

boolean = a >= b;
console.log("a é maior ou igual a b? " + boolean);

boolean = a == b;
console.log("a é igual b? " + boolean);

boolean = a != b;
console.log("a é diferente de b? " + boolean);