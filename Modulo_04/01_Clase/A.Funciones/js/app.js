function sayName(name) {
    console.log("Hola! Me llamo " + name);
}

sayName("Javier");
sayName("Antonio");
sayName("Alba");
sayName("Braulio");

/**
 *  KISS - Keep It Simple Stupid
 *  DRY - Don't repeat yourself (responsabilidad única.)
 */

// var sayHello = function() {
//     console.log("Hola Mundo!");
// }

var sayHello = () => {
    console.log("Hola Mundo!");
}
sayHello();

// function suma(numA, numB) {
//     var result = numA + numB;
//     return result;
// }

// var suma = function (numA, numB){
//     var result = numA + numB;
//     return result;
// }

/* SINTAXIS ABREVIADA */
//var suma = (numA, numB) => { return numA + numB };
var suma = (numA, numB) => numA + numB;

console.log(suma(2,2));



/* DECLARACION DE FUNCIONES */


/* 
* METODOS VS FUNCIONES 
*   Método es una función almacenada en una propiedad de un objeto.
*/
var person = {
    name: "Javier",
    age: 36,
    saySomething: () => {
        console.log("El profe de la clase de Funciones.")
    }
}

person.saySomething();



