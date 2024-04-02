import tipoCategoria from "../schemas/categoria.schema";
import { CategoriaType } from "../types/categoria.type";

class CategoriaService {
  async create(categoria: CategoriaType) {
    const createdCategoria = await tipoCategoria.create(categoria);
    return createdCategoria;
  }

  async findAll() {
    const findedCategorias = await tipoCategoria.find();
    return findedCategorias;
  }

  async findById(id: string) {
    const findedCategoria = await tipoCategoria.findById(id);
    return findedCategoria;
  }

  async update(id: string, categoria: CategoriaType) {
    const updateCategoria = await tipoCategoria.findByIdAndUpdate(
      id,
      {
        nome: categoria.nome,
        cor: categoria.cor,
      },
      { new: true }
    );
    return updateCategoria;
  }

  async delete(id: string) {
    try {
      await tipoCategoria.findByIdAndDelete(id);
      return "Categoria removida com exito.";
    } catch (error) {
      throw new Error(`Erro ao remover a categoria, erro: ${error}`);
    }
  }
}

export default new CategoriaService();
