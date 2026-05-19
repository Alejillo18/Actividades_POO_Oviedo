"use strict";
/* 1 - SRP - Principio de Responsabilidad Única */
/* Codigo corregido: */
class Usuario {
    nombre;
    email;
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
    validarEmail() {
        return this.email.includes("@");
    }
}
class UsuarioRepositorio {
    guardar(usuario) {
        console.log(`Guardando ${usuario.nombre} en BD`);
    }
    cargar(id) {
        return null;
    }
}
class EmailService {
    enviarEmail(usuario, mensaje) {
        console.log(`Enviando email a ${usuario.email}: ${mensaje}`);
    }
}
/* uso */
const usuario = new Usuario("Alejo", "Alejo@falso.com");
const repositorio = new UsuarioRepositorio();
const emailService = new EmailService();
repositorio.guardar(usuario);
emailService.enviarEmail(usuario, "Bienvenido!");
/* 2- OCP Principio Cerrado/abierto */
class Forma {
}
class Circulo extends Forma {
    radio;
    constructor(radio) {
        super();
        this.radio = radio;
    }
    calcularArea() {
        return 3.1416 * this.radio ** 2;
    }
}
class Rectangulo extends Forma {
    ancho;
    alto;
    constructor(ancho, alto) {
        super();
        this.ancho = ancho;
        this.alto = alto;
    }
    calcularArea() {
        return this.ancho * this.alto;
    }
}
class Triangulo extends Forma {
    base;
    altura;
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}
class CalculadoraArea {
    calcularAreaTotal(formas) {
        return formas.reduce((total, forma) => total + forma.calcularArea(), 0);
    }
}
/* Uso */
const formas = [
    new Circulo(5),
    new Rectangulo(4, 6),
    new Triangulo(3, 8)
];
const calculadora = new CalculadoraArea();
const areaTotal = calculadora.calcularAreaTotal(formas);
console.log(`Área total: ${areaTotal}`);
/* 3- Principio de Sustitución de Liskov LSP */
class FormaGeometrica {
}
class Rectangulo2 extends FormaGeometrica {
    ancho;
    alto;
    constructor(ancho, alto) {
        super();
        this.ancho = ancho;
        this.alto = alto;
    }
    calcularArea() {
        return this.ancho * this.alto;
    }
}
class Cuadrado extends FormaGeometrica {
    lado;
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        return this.lado ** 2;
    }
}
function calcularAreaTotal(formas) {
    return formas.reduce((total, forma) => total + forma.calcularArea(), 0);
}
const formasLSP = [new Rectangulo2(5, 4), new Cuadrado(3)];
console.log(`Área total: ${calcularAreaTotal(formasLSP)}`);
class Humano {
    trabajar() { console.log("Humano trabajando"); }
    comer() { console.log("Humano comiendo"); }
    dormir() { console.log("Humano durmiendo"); }
}
class Robot {
    trabajar() { console.log("Robot trabajando"); }
}
/* uso */
const humano = new Humano();
const robot = new Robot();
humano.trabajar();
robot.trabajar();
class MySQLDatabase {
    conectar() { console.log("Conectando a MySQL"); }
    guardar(datos) { console.log(`Guardando en MySQL: ${datos}`); }
}
class PostgreSQLDatabase {
    conectar() { console.log("Conectando a PostgreSQL"); }
    guardar(datos) { console.log(`Guardando en PostgreSQL: ${datos}`); }
}
class Aplicacion {
    db;
    constructor(db) {
        this.db = db;
    }
    procesarDatos(datos) {
        this.db.conectar();
        this.db.guardar(datos);
    }
}
/* uso */
const mysqlDb = new MySQLDatabase();
const postgresDb = new PostgreSQLDatabase();
const app1 = new Aplicacion(mysqlDb);
const app2 = new Aplicacion(postgresDb);
app1.procesarDatos("Datos de app1");
app2.procesarDatos("Datos de app2");
class EmailNotificador {
    enviar(mensaje) {
        console.log(`Enviando email: ${mensaje}`);
    }
}
class SMSNotificador {
    enviar(mensaje) {
        console.log(`Enviando SMS: ${mensaje}`);
    }
}
class PushNotificador {
    enviar(mensaje) {
        console.log(`Enviando push: ${mensaje}`);
    }
}
class ServicioNotificaciones {
    notificadores = [];
    agregarNotificador(notificador) {
        this.notificadores.push(notificador);
    }
    notificarTodos(mensaje) {
        this.notificadores.forEach(notificador => notificador.enviar(mensaje));
    }
}
class Usuario2 {
    nombre;
    email;
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}
const servicio = new ServicioNotificaciones();
servicio.agregarNotificador(new EmailNotificador());
servicio.agregarNotificador(new SMSNotificador());
servicio.agregarNotificador(new PushNotificador());
const usuarioAlejo = new Usuario2("Alejo", "Alejo@emailFalso.com");
servicio.notificarTodos(`¡Bienvenido ${usuarioAlejo.nombre}!`);
