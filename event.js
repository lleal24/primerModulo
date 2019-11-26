const EvenEmitter = require('events'); //modulo para crear y escuchar eventos

const emitter = new EvenEmitter(); //Instancea objeto el evento

emitter.on('event', function () { /* camelcase on = addEventListener */
    console.log('Ha ocurrido un evento...'); /* bloque que ocurre con el evento */
}) /* Escucha */


/* EMITIR EVENTO */
emitter.emit('event');

//Eventos con argumentos
emitter.on('eventWhitArgument', function(arg){
    console.log('Un evento con los siguientes argumento ha ocurrido: '+arg.id +' ' + arg.numero);
})
emitter.emit('eventWhitArgument',{id:1,numero:24}); //se emite el evento y se le pasan los argumentos definidos el id y unnumero como objeto

//eventos con funcion flecha
//Eventos con argumentos
emitter.on('eventRow', (arg)=>{
    console.log('Un evento FLECHA con los siguientes argumento ha ocurrido: '+arg.id +' ' + arg.numero);
})
emitter.emit('eventRow',{id:2,numero:30}); //se emite el evento y se le pasan los argumentos definidos el id y unnumero como objeto