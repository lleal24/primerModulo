//modulo para validar datos del sistema operativo
const os = require('os');
console.log('Version SO: ', os.release());

console.log('Memoria Libre: ', os.freemem()); /* comillas simplas concatena con , */

console.log("Memoria total: " + os.totalmem()); /* comillas dobles concatena con + */