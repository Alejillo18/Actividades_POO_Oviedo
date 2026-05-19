/* 1 - SRP - Principio de Responsabilidad Única */
/* Codigo corregido: */
class Usuario {
    constructor(public nombre: string, public email: string) {}
    validarEmail(): boolean {
        return this.email.includes("@");
    }
}
class UsuarioRepositorio {
    guardar(usuario: Usuario): void {
        console.log(`Guardando ${usuario.nombre} en BD`);
    }
    cargar(id: string): Usuario | null {
        return null;
    }
}

class EmailService {
    enviarEmail(usuario: Usuario, mensaje: string): void {
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
abstract class Forma {
    abstract calcularArea(): number;
}
class Circulo extends Forma {
    constructor(private radio: number) {
        super();
    }
    calcularArea(): number {
        return 3.1416 * this.radio ** 2;
    }
}
class Rectangulo extends Forma {
    constructor(private ancho: number, private alto: number) {
        super();
    }
    calcularArea(): number {
        return this.ancho * this.alto;
    }
}
class Triangulo extends Forma {
    constructor(private base: number, private altura: number) {
        super();
    }
    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}
class CalculadoraArea {
    calcularAreaTotal(formas: Forma[]): number {
        return formas.reduce((total, forma) => total + forma.calcularArea(), 0);
    }
}

/* Uso */
const formas: Forma[] = [
    new Circulo(5),
    new Rectangulo(4, 6),
    new Triangulo(3, 8)
];

const calculadora = new CalculadoraArea();
const areaTotal = calculadora.calcularAreaTotal(formas);
console.log(`Área total: ${areaTotal}`);

/* 3- Principio de Sustitución de Liskov LSP */
abstract class FormaGeometrica {
    abstract calcularArea(): number;
}
class Rectangulo2 extends FormaGeometrica {
    constructor(private ancho: number, private alto: number) {
        super();
    }    
    calcularArea(): number {
        return this.ancho * this.alto;
    }
}
class Cuadrado extends FormaGeometrica {
    constructor(private lado: number) {
        super();
    }
    calcularArea(): number {
        return this.lado ** 2;
    }
}
function calcularAreaTotal(formas: FormaGeometrica[]): number {
    return formas.reduce((total, forma) => total + forma.calcularArea(), 0);
}
const formasLSP: FormaGeometrica[] = [new Rectangulo2(5, 4), new Cuadrado(3)];
console.log(`Área total: ${calcularAreaTotal(formasLSP)}`);

/* 4- ISP Principio de Segregación de Interfaces */

interface Trabajador {
    trabajar(): void;
}

interface Comedor {
    comer(): void;
}

interface Durmiente {
    dormir(): void;
}
class Humano implements Trabajador, Comedor, Durmiente {
    trabajar(): void { console.log("Humano trabajando"); }
    comer(): void { console.log("Humano comiendo"); }
    dormir(): void { console.log("Humano durmiendo"); }
}
class Robot implements Trabajador {
    trabajar(): void { console.log("Robot trabajando"); }
}
/* uso */
const humano = new Humano();
const robot = new Robot();

humano.trabajar();
robot.trabajar();

/* 5- DIP - Principio de Inversión de Dependencias */
interface BaseDeDatos {
    conectar(): void;
    guardar(datos: string): void;
}
class MySQLDatabase implements BaseDeDatos {
    conectar(): void { console.log("Conectando a MySQL"); }
    guardar(datos: string): void { console.log(`Guardando en MySQL: ${datos}`); }
}
class PostgreSQLDatabase implements BaseDeDatos {
    conectar(): void { console.log("Conectando a PostgreSQL"); }
    guardar(datos: string): void { console.log(`Guardando en PostgreSQL: ${datos}`); }
}
class Aplicacion {
    constructor(private db: BaseDeDatos) {}
    procesarDatos(datos: string): void {
        this.db.conectar();
        this.db.guardar(datos);
    }
}

/* uso */
const mysqlDb: BaseDeDatos = new MySQLDatabase();
const postgresDb: BaseDeDatos = new PostgreSQLDatabase();

const app1 = new Aplicacion(mysqlDb);
const app2 = new Aplicacion(postgresDb);

app1.procesarDatos("Datos de app1");
app2.procesarDatos("Datos de app2");



/* Sistema de notificaciones: */
interface Notificador {
    enviar(mensaje: string): void;
}
class EmailNotificador implements Notificador {
    enviar(mensaje: string): void {
        console.log(`Enviando email: ${mensaje}`);
    }
}
class SMSNotificador implements Notificador {
    enviar(mensaje: string): void {
        console.log(`Enviando SMS: ${mensaje}`);
    }
}
class PushNotificador implements Notificador {
    enviar(mensaje: string): void {
        console.log(`Enviando push: ${mensaje}`);
    }
}
class ServicioNotificaciones {
    private notificadores: Notificador[] = [];
    
    agregarNotificador(notificador: Notificador): void {
        this.notificadores.push(notificador);
    }
    notificarTodos(mensaje: string): void {
        this.notificadores.forEach(notificador => notificador.enviar(mensaje));
    }
}
class Usuario2 {
    constructor(public nombre: string, public email: string) {}
}
const servicio = new ServicioNotificaciones();
servicio.agregarNotificador(new EmailNotificador());
servicio.agregarNotificador(new SMSNotificador());
servicio.agregarNotificador(new PushNotificador());

const usuarioAlejo = new Usuario2("Alejo", "Alejo@emailFalso.com");
servicio.notificarTodos(`¡Bienvenido ${usuarioAlejo.nombre}!`);