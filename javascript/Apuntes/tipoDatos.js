//Tipo de dato string
var nombre = "Luis";
console.log(nombre);

//Tipo de dato numérico
var age = 19;
console.log(age);

//Tipo de dato booleano
var permiso = true;
console.log(permiso);

//Tipo de dato objeto
var conjunto = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "556353252"
}
console.log(conjunto);

//Tipo de dato function
function miFuncion(){};
console.log(miFuncion);

//Tipo de dato symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);

//Tipo clase (funciones)
class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
}}
console.log(Persona);

//Tipo de dato undefined
var x;
console.log(x);

//Tipo de dato null
var y = null;
console.log(y);

//Tipo de dato arrays
var guitarras = ['Manson', 'Stratocaster', 'Marshall']
console.log(guitarras);

//Tipo de dato empty string
var z = '';
console.log(z);
//comprobar que tipo de dato es cada uno con 'typeof'
console.log(typeof nombre);
console.log(typeof age);
console.log(typeof conjunto);
console.log(typeof permiso);
console.log(typeof miFuncion);
console.log(typeof simbolo);
console.log(typeof Persona);
console.log(typeof x);
console.log(typeof y);
console.log(typeof guitarras);
console.log(typeof z);