/* creacion de servidor */

const http = require('http');
const port = 3030;

/* FIRTS SESSION
const server = http.createServer();

server.on('connection', (socket)=>{ uso de sockets
    console.log('nueva conexion detectada');
})

server.listen(port) servidor en modo escucha
console.log('Escuchando en el puerto' +port+'...'); */
/* --------------------------------------------------------------------------------- */

/* SECOND SESSION
const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.write('Hola Mundo desde node js');
        res.write('Este es el home de la pagina');
        //indicar el final de la respuesta
        res.end();
    }
     req.url = se obtiene la url de la peticion 
    if(req.url == '/coches'){
        res.write('Pagina de coches');
        res.end();

    }
});
server.listen(port);
console.log('Escuchando en puerto '+port); */

/* --------------------------------------------------------------------------------- */
const server = http.createServer((req, res)=>{
    res.writeHead(
        200, //status code
        {'Content-Type': 'text/html'} //tipo de contenido
    );
    res.write('<h1>Esta es mi pagina</h1>');
    res.write('<p>Este es mi parrado</p>');
    res.end();
}).listen(port);
console.log('Server listen on port: '+port+'...')

