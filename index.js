/* act1 : Crear un objeto auto con:
marca
modelo
método arrancar()
Acceder a una propiedad del objeto.
 */

let auto = {
    marca : "bmw",
    modelo : "m4 competition",
    arrancar(){
        console.log("motor en marcha")
    }

}

console.log(auto.marca)
auto.arrancar()

/* act2 : Crear una función constructora Persona:
nombre
edad
método saludar()
Crear 2 personas con new.
 */

function Persona(nombre,edad) {
    this.nombre = nombre;
    this.edad  = edad;
    this.saludar = () => {
        console.log(`Hola, ${this.nombre}`);
    };
}
   
const persona1 = new Persona("persona1", 23)
const persona2 = new Persona("persona2", 24)
persona1.saludar()
persona2.saludar()


/* 
act3 : Usar prototipos:
Persona.prototype.caminar = function() {
 return "Estoy caminando";
};
 */

function PersonaProto(nombre,edad) {
    this.nombre = nombre;
    this.edad  = edad;
}
PersonaProto.prototype.caminar = function (){
    return `${this.nombre} esta caminando`;
};

   
const persona1Proto = new PersonaProto("persona1", 23)
const persona2Proto = new PersonaProto("persona2", 24)
console.log(persona1Proto.caminar())
console.log(persona2Proto.caminar())


/* 
act4 : Crear una clase Animal:
propiedad nombre
método hacerSonido()
Crear una clase Perro que herede de Animal
 */

class Animal{
    constructor(nombre){
        this.nombre = nombre;
    }
    hacerSonido = ()=>{
        console.log("grrrrr")
    }
}

class Perro extends Animal{
    constructor (nombre){
        super(nombre)
    }
}


let lobo = new Animal("lobo")
let perro = new Perro("perro")
lobo.hacerSonido()
perro.hacerSonido()


/* 
act5 : Crear una clase CuentaBancaria:
saldo
métodos:
depositar()
retirar()
verSaldo()
 */


class CuentaBancaria{
    constructor(saldoInicial = 0){
        this.saldo = Number(saldoInicial);
    }
    depositar = monto=> this.saldo += Number(monto);
    retirar = monto=> this.saldo -= Number(monto);
    verSaldo = ()=>{
        console.log(`Saldo de la cuenta actual: ${this.saldo.toFixed(2)}`)
    }
}

const cuentaBancaria = new CuentaBancaria(200)
cuentaBancaria.depositar(14)
cuentaBancaria.retirar(2.5)
cuentaBancaria.verSaldo()
