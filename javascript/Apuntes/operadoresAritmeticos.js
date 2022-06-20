/* OPERADORES LÓGICOS
    Suma (+)
    Resta (-)
    Multiplicacion (*)
    Exponente (**)
    División (/)
    Modulo (%)
    Incremento (++)
    Decremento (--)
*/
let a = 20, b = 10;
let c;
//suma
function suma(){
    c = a + b;
    console.log(c);
}
suma(a,b);
//resta
function resta(){
    c = a - b;
    console.log(c);
}
resta(a,b);
//multiplicacion
function multi(){
    c = a*b;
    console.log(c);
}
multi(a,b);
//division
function div(){
    c = a / b;
    console.log(c);
}
div(a,b);
//exponente
function exp(){
    c = a ** b;
    console.log(c);
}
exp(a,b);
//modular
function mod(){
    c = a % b;
    console.log(c);
}
mod(a,b);
//preincremento: primero se realiza el incremento y luego la asignación
function preincrement(){
    c = ++a;
    console.log(a);
    console.log(c);
}
preincrement(a,b);
//postincremento: primero se realiza la asignación y despues el incremento
function postincrement(){
    c = b++;
    console.log(b);
    console.log(c);
}
postincrement(a,b);
//predecremento: primero se realiza el decremento y después la asignación
function predecrement(){
    c = --b;
    console.log(b);
    console.log(c);
}
predecrement(a,b);
//postdecremento: primero se realiza la asignacion y despues el decremento
function postdecrement(){
    c = b--;
    console.log(b);
    console.log(c);
}
postdecrement(a,b);