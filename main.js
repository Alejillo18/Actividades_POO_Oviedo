"use strict";
//Ejercicio 1
console.log("Hola, Alejo");
//Ejercicio 1.1
const nombreInput = document.getElementById("nombre");
const boton = document.getElementById("btn");
boton.addEventListener("click", () => {
    if (nombreInput) {
        console.log("Hola, " + nombreInput.value);
    }
});
//Ejercicio 2
console.log(118 + 56);
//Ejercicio 3:
console.log(12345 + 67890);
//Ejercicio 4:
console.log(12 * 13);
//Ejercicio 5:
console.log(321 - 213);
//Ejercicio 6:
console.log(301 / 3);
//Ejercicio 7:
console.log(301 % 3);
//Ejercicio 8:
console.log(-2 + 3 * 5);
//Ejercicio 9:
console.log((20 + 5) % 6);
//Ejercicio 10:
console.log(15 + -5 * 6 / 10);
//Ejercicio 11:
console.log(2 + 10 / 5 * 2 - 7 % 1);
//Ejercicio 12:
let n1 = 20;
let n2 = 5;
let n3 = 6;
let resultado = ((n1 - n2) % n3);
console.log(resultado);
//Ejercicio 13:
n1 = 15;
n2 = -5;
n3 = 6;
let resultado2 = (n1 + n2 * n3 / 10);
console.log(resultado2);
//Ejercicio 14:
let n4 = 121;
let n5 = 132;
let resultado3 = (n4 * n5);
console.log(resultado3);
//Ejercicio 15:
let n6 = 285;
let n7 = 1396;
let resultado4 = (n6 + n7);
console.log(resultado4);
