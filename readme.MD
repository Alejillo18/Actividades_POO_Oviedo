# Cuestionario: 

### _¿Qué es un objeto en JavaScript?_

Es una colección de propiedades (datos) y métodos (funciones).

### _¿Qué diferencia hay entre clase y objeto?_

Clase: Es el plano o molde

Objeto: Es la instancia real

### _¿Qué es un prototipo?_

Es un mecanismo por el cual los objetos heredan características de otros

### _¿Qué hace la palabra new?_

* crea un objeto
* asigna this
* conecta el prototipo automáticamente

### _¿Por qué JS no es realmente orientado a clases?_

Porque las "clases" en JS (introducidas en ES6) son solo "sugar syntax". Por detras, JS sigue funcionando con prototipos

### _¿Qué diferencia hay entre: método dentro del constructor y método en prototype?_

En el constructor: Se crea una copia nueva de la función para cada instancia

En el prototipo: Existe una sola copia de la función compartida por todas las instancias

### _¿Qué hace extends?_

extends: Crea una relación de herencia

### _¿Para qué sirve super()?_

super(): Es una función que llama al constructor del padre. Es obligatorio usarla si la clase hija tiene su propio constructor.
sirve para que el padre pueda inicializar sus propiedades.

### _¿Qué es la prototype chain?_

Es la cadena de "herencia" de JS. Si intentás acceder a auto.toString(), JS busca:

* En el objeto auto.
* Si no está, en el prototipo de Auto.
* Si no está, en el prototipo <!--Alejo--> de Object.
* Si llega a null y no lo encontró, devuelve undefined.

### _¿Cuándo conviene usar POO y cuándo no?_

conviene cuando tenemos entidades complejas que comparten lógica.

No conviene para scripts simples, funciones matemáticas puras o transformaciones de datos rápidas

### _¿Qué ventaja tiene sobre código “normal”?_
La POO ofrece encapsulamiento, podés proteger datos, para que nadie los modifique por error desde afuera, obligando a usar métodos controlados

### _¿Qué problema resuelve la herencia?_

Resuelve la duplicación de código.