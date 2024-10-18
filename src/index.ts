import express from 'express';
import todoRoutes from './routes/todoRoutes';
import { Sequelize } from 'sequelize';

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de Sequelize
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql', // o 'postgres', 'sqlite', etc.
});

app.use(express.json()); // Middleware para procesar JSON
app.use('/api', todoRoutes); // Verifica que las rutas estén prefijadas correctamente

// Conectar a la base de datos y luego iniciar el servidor
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos exitosa.');
    app.listen(PORT, () => {
      console.log(`Servidor ejecutándose en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });
