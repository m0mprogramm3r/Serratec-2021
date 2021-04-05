//Indique os resultados das expressões relacionais abaixo. 
//Utilize uma variável para atribuir a sentença, e então exibir na tela o resultado booleano. 

let boolean 
let x = 6.0; 
let y = 2;
let z = 4.000;
let a = 8;
let b = 7.5;
let c = 12;

boolean = x - y > a;
console.log("Letra A: " + boolean);

boolean = x - (y * a) > c % y;
console.log("Letra B: " + boolean);

boolean = y != c;
console.log("Letra C: " + boolean);

boolean = x * y != c;
console.log("Letra D: " + boolean);

boolean = c % y <= y % c;
console.log("Letra E: " + boolean);

boolean = a < b;
console.log("Letra F: " + boolean); 

boolean = z / a + (x * y) - 5 >= b;
console.log("Letra G: " + boolean);

boolean = c * z + 2 == a * x + y;
console.log("Letra H: " + boolean);

boolean = c == z + b;
console.log("Letra I: " + boolean);

boolean = y * 2 != 7 - b;
console.log("Letra J: " + boolean);