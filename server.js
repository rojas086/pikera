const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/data', (req, res) => {
  // Aquí es donde se manejaría la lógica de acceso a la base de datos
  res.json({ message: 'Acceso a datos exitoso' });
});

app.post('/api/data', (req, res) => {
  // Lógica para agregar datos a la base de datos
  res.json({ message: 'Datos guardados' });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
Archivo: frontend
