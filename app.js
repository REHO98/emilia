const express = require('express');
const path = require('path')

const app = express();
const PORT = 3000;

app.use(express.static('public'));

/* RUTAS */
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});

app.get('/nosotros', (req, res) => {
  res.sendFile(__dirname + '/views/about.html');
});

app.get('/musica', (req, res) => {
  res.sendFile(__dirname + '/views/music.html');
});

app.get('/contacto', (req, res) => {
  res.sendFile(__dirname + '/views/contact.html');
});

app.listen(PORT, () => {
  console.log(`Server runnig in http://localhost:${PORT}`);
});