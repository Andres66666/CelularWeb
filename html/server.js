const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

app.post('/enviar_mensaje', (req, res) => {
  const message = req.body.message;

  // Lee el archivo JSON y agrega el nuevo mensaje
  const messages = JSON.parse(fs.readFileSync('mensajes.json'));
  messages.push(message);

  // Guarda los mensajes actualizados en el archivo JSON
  fs.writeFileSync('mensajes.json', JSON.stringify(messages));

  // Envía una respuesta al cliente
  res.send({ message: 'Mensaje recibido.' });
});

app.get('/ver_mensajes', (req, res) => {
  // Lee el archivo JSON y envía los mensajes al cliente
  const messages = JSON.parse(fs.readFileSync('mensajes.json'));
  res.send(messages);
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000.');
});