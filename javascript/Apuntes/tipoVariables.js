//Buenas practicas al declarar variables
    /*Reglas las variables
        1. Letras mayusculas y minusculas, guion bajo, o signo de dolar
        2. No pueden empezar con numero 
        3. Puedes comenzar con los simbolos especiales mencionados anteriormente
        4. No se puede usar palabra reservada o KeyWords par nombrar una variable
    */
    //Notación de altas y Bajas
let numeroEntero;
let numeroentero;
//Es sensible a minusculas y mayusculas

//Varias variables a la vez
let a, b, c;
a = 10, b = 5, c = 60;
let d = a + b + c;
console.log(d);

//su valor puede ser reemplazado por otro en cualquier momento
let variable;
console.log(variable);
variable = 1;
console.log(variable);

//su valor no puede ser reemplazado
const nombre = 1;
console.log(nombre);
//nombre = 2;
//console.log(nombre); dará error
