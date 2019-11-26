/* creacion de servidor */

const http = require('http');

/* const server = http.createServer();

server.on('connection', (socket)=>{ uso de sockets
    console.log('nueva conexion detectada');
})

server.listen(2012) servidor en modo escucha
console.log('Escuchando en el puerto 2012...'); */

const port = 3030;
const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.write('Hola Mundo desde node js');
        res.write('Este es el home de la pagina');
        //indicar el final de la respuesta
        res.end();
    }
    /* req.url = se obtiene la url de la peticion */
    if(req.url == '/coches'){
        res.write('Pagina de coches');
        res.end();

    }
});
server.listen(port);
console.log('Escuchando en puerto '+port);
