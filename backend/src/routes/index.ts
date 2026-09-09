import { Router } from 'express';
import userRoutes from './userRoutes';

const routes = Router();

routes.get('/health', (req, res) => {
  return res.json({ status: 'API Orbit funcionando!' });
});

// Registra as rotas de usuários sob o prefixo /usuarios
routes.use('/usuarios', userRoutes);

export default routes;