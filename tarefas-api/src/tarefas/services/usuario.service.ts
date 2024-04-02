import tipoUsuario from "../schemas/usuario.schema";
import { UsuarioType } from "../types/usuario.type";

class UsuarioService {
  async create(usuario: UsuarioType) {
    const createdUsuario = await tipoUsuario.create(usuario);
    return createdUsuario;
  }

  async findAll() {
    const findedUsuarios = await tipoUsuario.find();
    return findedUsuarios;
  }

  async findById(id: string) {
    const findedUsuario = await tipoUsuario.findById(id);
    return findedUsuario;
  }

  async update(id: string, usuario: UsuarioType) {
    const updateUsuario = await tipoUsuario.findByIdAndUpdate(
      id,
      {
        nomeUsuario: usuario.nomeUsuario,
        peso: usuario.peso,
        senha: usuario.senha,
        email: usuario.email,
      },
      { new: true }
    );
    return updateUsuario;
  }

  async delete(id: string) {
    try {
      await tipoUsuario.findByIdAndDelete(id);
      return "Usuario removido com exito.";
    } catch (error) {
      throw new Error(`Erro ao remover o usuario, erro: ${error}`);
    }
  }
}

export default new UsuarioService();
