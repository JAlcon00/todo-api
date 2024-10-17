import express from 'express';
import todoRoutes from './routes/todoRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware para procesar JSON
app.use('/api', todoRoutes); // Verifica que las rutas estén prefijadas correctamente

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
