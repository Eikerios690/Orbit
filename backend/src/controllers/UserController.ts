import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

const userService = new UserService();

export class UserController {
  // trazendo TODOS os usuários
  async getAll(req: Request, res: Response) {
    try {
      const users = await userService.findAll();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
  }

  // trazendo APENAS UM usuário
  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await userService.findById(Number(id));
      if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
  }

  // enviando dados para CRIAR um usuário
  async create(req: Request, res: Response) {
    try {
      const { nome, email, cargo } = req.body;
      const newUser = await userService.create({ nome, email, cargo });
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  }

  // enviando dados para EDITAR um usuário
  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { nome, email, cargo } = req.body;
      const updatedUser = await userService.update(Number(id), { nome, email, cargo });
      if (!updatedUser) return res.status(404).json({ error: 'Usuário não encontrado' });
      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
  }

  // avisando para DELETAR um usuário
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deleted = await userService.delete(Number(id));
      if (!deleted) return res.status(404).json({ error: 'Usuário não encontrado' });
      return res.status(200).json({ message: 'Usuário removido com sucesso' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao deletar usuário' });
    }
  }
}