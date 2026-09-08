import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Bem-vindo à API do Orbit!' });
});

export default routes;