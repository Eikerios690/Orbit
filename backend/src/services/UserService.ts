import {db} from '../config/database';

export class UserService {
    // Buscar todos os usuários
    async findAll() {
        const query = 'SELECT id, nome, email, cargo, criado_em FROM usuarios ORDER BY id ASC';
        const {rows} = await db.query(query);
        return rows;
    }

    // Pega UM usuário pelo ID
    async findById(id: number){
        const query = 'SELECT id, nome, email, cargo, criado_em FROM usuarios WHERE id = $1';
        const {rows} = await db.query(query, [id]);
        return rows[0];
    }

    // Criar novo usuário
    async create(nome: string, email: string, cargo: string){
        const query = `
            INSERT INTO usuarios (nome, email, cargo)
            VALUES ($1, $2, $3)
            RETURNING id, nome, email, cargo, criado_em;
            `;
        const values = [nome, email, cargo];
        const {rows} = await db.query(query, values);
        return rows[0];
    }

    // ATUALIZA (edita) os dados de um usuário existente
    async update(id: number, user: { nome: string; email: string; cargo: string }) {
    const query = `
      UPDATE usuarios
      SET nome = $1, email = $2, cargo = $3
      WHERE id = $4
      RETURNING id, nome, email, cargo, criado_em
    `;
    const { rows } = await db.query(query, [user.nome, user.email, user.cargo, id]);
    return rows[0];
  }

    // DELETA um usuário pelo ID
    async delete(id: number) {
    const query = 'DELETE FROM usuarios WHERE id = $1 RETURNING id';
    const { rows } = await db.query(query, [id]);
    return rows[0];
  }
}