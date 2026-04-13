//Ejercicio 1:


// Crea un programa que pida al usuario dos números enteros y diga si son iguales o, en caso contrario, cuál es el mayor de ellos.

/* const numero1s= prompt("Ingrese el primer número");
const numero2s= prompt("Ingrese el segundo número");

const numero1 : number = parseInt(numero1s|| "0");
const numero2 : number = parseInt(numero2s||"0");
 
if(numero1 === numero2){
    console.log(`los numeros ${numero1} y ${numero2} son iguales`);
}
else{
    console.log(`el numero mayor entre ${numero1} y ${numero2} es ${Math.max(Number(numero1),Number(numero2))}`);
}
*/

//Ejercicio 2:

// Crea el diagrama de flujo para el programa que pide al usuario dos números y dice si uno de ellos es positivo, si lo son los dos o si no lo es ninguno.


/* 

const numero1s= prompt("Ingrese el primer número");
const numero2s= prompt("Ingrese el segundo número");

const numero1 : number = parseInt(numero1s|| "0");
const numero2 : number = parseInt(numero2s||"0");

switch(true){
    case(numero1 < 0 && numero2 < 0 ): console.log(`Ambos numeros son negativos`);break;
    case(numero1 >= 0 && numero2 < 0): console.log(`el primer numero es positivo`);break;
    case(numero1 < 0 && numero2 >= 0): console.log(`el segundo numero es positivo`); break;
    default: console.log("ambos numeros son positivos")
} */



//Ejercicio 3:

/* Crear el diagrama de flujo para el programa que pide tres números al usuario y dice cuál es el mayor de los tres. */

/* 
const numero1sej3= prompt("Ingrese el primer número");
const numero2sej3= prompt("Ingrese el segundo número");
const numero3sej3= prompt("Ingrese el tercer número");

const numero1ej3 : number = parseInt(numero1sej3|| "0");
const numero2ej3 : number = parseInt(numero2sej3||"0");
const numero3ej3 : number = parseInt(numero3sej3||"0");

console.log(`El numero mas grande de estos 3: ${numero1ej3}, ${numero2ej3}, ${numero3ej3} es el numero: ${Math.max(numero1ej3,numero2ej3,numero3ej3)}`)
 */



//Ejercicio 4:
//Crea un programa que use el operador condicional para mostrar un el valor absoluto de un número de la siguiente forma: si el número es positivo,
//  se mostrará tal cual; si es negativo, se mostrará cambiado de signo


/* const numeroej4s = prompt("Ingrese el valor:");
const numeroej4 : number = parseInt(numeroej4s || "0" );

if(numeroej4 > 0){console.log("El numero es: ", numeroej4)}
else{console.log("El numero es: ", numeroej4 * -1)}
 */


//Ejercicio 5:
//Usa el operador condicional para calcular el menor de dos números.

/* 
const numero1ej5s = prompt("Ingrese el primer valor: ");
const numero2ej5s = prompt("Ingrese el segundo valor: ");

const numero1ej5 : number = parseInt(numero1ej5s || "0")
const numero2ej5 : number = parseInt(numero2ej5s || "0")
console.log(`el numero menor de los dos ingresados es: ${numero1ej5 > numero2ej5? numero2ej5: numero1ej5}`)
 */



//Ejercicio 6
//Crea un programa que pida un número del 1 al 5 al usuario, y escriba el nombre de ese número, 
// usando "switch" (por ejemplo, si introduce "1", el programa escribirá "uno").


/* 
const numeroej6s = prompt("Ingrese el numero")
const numeroej6 : number = parseInt(numeroej6s || "0");

switch(numeroej6){
    case(1):console.log("uno");break;
    case(2):console.log("dos");break;
    case(3):console.log("tres");break;
    case(4):console.log("cuatro");break;
    case(5):console.log("cinco");break;
    default: (console.log("numero fuera del rango de 1 y 5"))
}
     */



//Ejercicio 7
// Crea un programa que lea una letra tecleada por el usuario y diga si se trata de un signo de puntuación (. , ; :), 
// una cifra numérica (del 0 al 9) o algún otro carácter, usando "switch" (pista: habrá que usar un dato de tipo "char").

/* const ingreso  = prompt("Ingrese un caracter:") || "";
if (ingreso !== null){
    switch(true){
        case(ingreso.length === 1 && (ingreso >= "0") && (ingreso <= "9") ): console.log("Es un numero de una cifra"); break;
        case([".",",",";",":"].includes(ingreso)): console.log("Es un caracter de tipo . , ; :"); break;
        default:(console.log("no es ni un numero de una cifra ni un signo de puntuacion, probablemente sea otra cosa"))
    }
}

 */


//Ejercicio 8
//Crea un programa que lea una letra tecleada por el usuario y diga si se trata de una vocal, 
// una cifra numérica o una consonante, usando "switch"

/* let caracter  = prompt("Ingrese un caracter:") || "";
caracter = caracter.toLocaleLowerCase()
    switch(true){
        case(["a","e","i","o","u"].includes(caracter) && caracter.length <=1):console.log("el caracter ingresado es una vocal");break;
        case(caracter.length <= 1 && caracter>= "0" && caracter<= "9"):console.log("el caracter ingresado es un numero");break;
        case(caracter.length <= 1 && ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'ñ', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'].includes(caracter)):
        console.log("el caracter ingresado es una consonante!")
        ;break;
        default: console.log("Ingreso mal los datos!")
    }
 */


//Ejercicio 9
//Repite el ejercicio 6 , empleando "if" en lugar de "switch"

/* 
const numeroej9s = prompt("Ingrese el numero")
const numeroej9 : number = parseInt(numeroej9s || "0");


if(numeroej9 === 1){console.log("uno")}
else if(numeroej9 === 2){console.log("dos")}
else if(numeroej9 === 3){console.log("tres")}
else if(numeroej9 === 4){console.log("cuatro")}
else if(numeroej9 === 5){console.log("cinco")}
else{"No esta comprendido en el rango de 0 a 5"}
 */

//Ejercicio 10:
//Repite el ejercicio 7, empleando "if" en lugar de "switch" (pista: como las cifras numéricas del 0 al 9 están ordenadas,
// no hace falta comprobar los 10 valores, 
// sino que se puede hacer con "if ((símbolo >= '0') && (símbolo <='9'))").

/* const ingreso  = prompt("Ingrese un caracter:") || "";
if (ingreso.length <= 1){
    
        if(ingreso.length === 1 && (ingreso >= "0") && (ingreso <= "9") ){console.log("Es un numero de una cifra")}
        else if([".",",",";",":"].includes(ingreso)){ console.log("Es un caracter de tipo . , ; :")}
        else{(console.log("no es ni un numero de una cifra ni un signo de puntuacion, probablemente sea otra cosa"))}
    }

else{
    console.log("Mal ingreso!")
} */


//Ejercicio 11:
//Repite el ejercicio 8, empleando "if" en lugar de "switch"
/* 
let caracter  = prompt("Ingrese un caracter:") || "";
caracter = caracter.toLocaleLowerCase()
   if(caracter.length <= 1){
        if(["a","e","i","o","u"].includes(caracter) && caracter.length <=1){console.log("el caracter ingresado es una vocal")}
        else if(caracter>= "0" && caracter<= "9"){console.log("el caracter ingresado es un numero")}
        else if(caracter.length <= 1 && ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'ñ', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'].includes(caracter)){
        console.log("el caracter ingresado es una consonante!")}
        else{
            console.log("No se ingreso ni una vocal, ni consonante ni numero");
        }
   }
   else{
    console.log("Se ingreso mas de un caracter")
   }

 */

//Ejercicio 12:
//Crea un programa que pida al usuario su contraseña (numérica). 
// Deberá terminar cuando introduzca como contraseña el número 1111, pero volvérsela a pedir tantas veces como sea necesario.
/* let contraseña : string = ""
let intentos: number = 0;
do{   
    if (intentos === 0){
        contraseña = prompt("Ingrese su contraseña") || ""
        intentos+=1
    }
    else{
        contraseña = prompt(`Ingrese nuevamente su contraseña, intento ${intentos} `) || ""
        intentos+=1
    }   
}
while(contraseña !== "1111")
 */



//Ejercicio 13:
//Crea un "calculador de cuadrados": pedirá al usuario un número y mostrará su cuadrado. 
// Se repetirá mientras el número introducido no sea cero (usa "while" para conseguirlo).

/* 
let num : string = "1";
let numero : number = 1;
while (numero !== 0){
    num = prompt("Ingrese un valor el cual desea obtener su cuadrado" +" con cero termina!") || "";
    if(num >= "0" && num <= "9"){
        numero = parseInt(num)
        alert(`El cuadrado de ${numero} es ${numero * numero} `)
    }
    else{
        alert("No se ingreso un valor numerico")
    }
} 
    */


//Ejercicio 14 - 15
//Crea un programa que pida de forma repetitiva pares de números al usuario. 
// Tras introducir cada par de números, responderá si el primero es múltiplo del segundo, 
// o el segundo es múltiplo del primero, o ninguno de ellos es múltiplo del otro
/* 
let numero1 : number = 1;
let numero2: number = 1;

while(numero1!== 0 && numero2 !== 0){
    numero1 = parseInt(prompt("Ingrese el primer valor")|| "0")
    numero2 = parseInt(prompt("Ingrese el segundo valor")|| "0")
    switch(true){
        case(numero1 === numero2 && numero1 !== 0): alert("Son los mismos numeros, son ambos multiplos del otro 😭😭😭");break;
        case((numero1 % numero2)===0): alert("El primer numero es multiplo del segundo");break;
        case((numero2 % numero1)===0): alert("El segundo numero es multiplo del primero");break;
        default: alert("Ninguno de los numeros es multiplo del otro")
    }
} 
    */

//Ejercicio 16:
//Crea un programa que escriba en pantalla los números del 1 al 10, usando "while"

/* let numero: number = 1;
while (numero<11){
    console.log(numero)
    numero+=1
} */


//Ejercicio 17
//Crea un programa que escriba en pantalla los números pares del 26 al 10 
// (descendiendo), usando "while"

/* let numero: number = 26;
while(numero >= 10){
    if (numero % 2 === 0){
        console.log(numero)
    }
    numero = numero - 2
} */


//Ejercicio 18
//Crea un programa calcule cuantas cifras tiene un número entero positivo (pista: se puede hacer dividiendo varias veces entre 10).
/* let numero1 = parseFloat(prompt("Ingrese el numero que desea saber la cantidad de cifras") ||"");
if(numero1 >= 1){
    let cifras: number = 1
    while((numero1 / 10.0) > 1.0){
        cifras+=1;
        numero1 = numero1 / 10.0
    }
    alert(`el numero tiene un total de ${cifras} cifras`)
}
else{
    alert("es negativo el numero!")
} */



//Ejercicio 19
//Crea el diagrama de flujo y la versión en TypeScript de un programa que dé al usuario tres oportunidades para adivinar un número del 1 al 10

let oportunidades : number = 3;
let numero = (Math.floor(Math.random()*10)) + 1
while (oportunidades !== 0){
    const numeroAdivinado = parseInt(prompt("Ingrese un numero del uno al diez: ") || "");
    if(numero === numeroAdivinado){
        alert("🎉🎉 Ganaste 🎉🎉")
        break;
    }
    oportunidades-=1
}
if(oportunidades === 0){
alert(`el numero era: ${numero} system32 fue eliminado exitosamente 😭😭`)
}