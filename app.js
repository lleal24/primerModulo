//require indica que requiere otros modulos
const sumar = require('./suma.js'); //importacion del modulo se recomienda sea const en vez de var para que este valor no pueda cambiar
const multiplicar = require('./multiplicar.js');

console.log(sumar.moduloSuma()); //recordar que se llama el metodo como tal asi que ()

console.log(sumar.sumar(5,6));
console.log(multiplicar.multiplicar(5,3));


