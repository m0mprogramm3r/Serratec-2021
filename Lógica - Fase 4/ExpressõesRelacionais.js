//Indique os resultados das expressões relacionais abaixo. 
//Utilize uma variável para atribuir a sentença, e então exibir na tela o resultado booleano. 

let res 
let x = 6.0; 
let y = 2;
let z = 4.000;
let a = 8;
let b = 7.5;
let c = 12;

res = x - y > a;
console.log("Letra A: " + res);

res = x - (y * a) > c % y;
console.log("Letra B: " + res);

res = y != c;
console.log("Letra C: " + res);

res = x * y != c;
console.log("Letra D: " + res);

res = c % y <= y % c;
console.log("Letra E: " + res);

res = a < b;
console.log("Letra F: " + res); 

res = z / a + (x * y) - 5 >= b;
console.log("Letra G: " + res);

res = c * z + 2 == a * x + y;
console.log("Letra H: " + res);

res = c == z + b;
console.log("Letra I: " + res);

res = y * 2 != 7 - b;
console.log("Letra J: " + res);