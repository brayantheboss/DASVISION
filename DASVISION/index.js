const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola Mundo - DataVision funcionando en la nube!\n');
});

// Render usa el puerto que ellos te asignan o el 3000 por defecto
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});