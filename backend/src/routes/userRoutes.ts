import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const userRoutes = Router();
const userController = new UserController();

// 1. GET /api/usuarios -> Busca TODOS
userRoutes.get('/', userController.getAll);

// 2. GET /api/usuarios/1 -> Busca APENAS o usuário de ID 1
userRoutes.get('/:id', userController.getById);

// 3. POST /api/usuarios -> CRIA um usuário novo
userRoutes.post('/', userController.create);

// 4. PUT /api/usuarios/1 -> ATUALIZA (edita) o usuário de ID 1
userRoutes.put('/:id', userController.update);

// 5. DELETE /api/usuarios/1 -> DELETA o usuário de ID 1
userRoutes.delete('/:id', userController.delete);

export default userRoutes;