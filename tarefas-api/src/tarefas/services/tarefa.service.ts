import tipoTarefa from "../schemas/tarefa.schema";
import { TarefaType } from "../types/tarefa.type";

class TarefaService {
  async create(tarefa: TarefaType) {
    const createdTarefa = await tipoTarefa.create(tarefa);
    return createdTarefa;
  }

  async findAll() {
    const findedTarefas = await tipoTarefa.find();
    return findedTarefas;
  }

  async findById(id: string) {
    const findedTarefa = await tipoTarefa.findById(id);
    return findedTarefa;
  }

  async update(id: string, tarefa: TarefaType) {
    const updateTarefa = await tipoTarefa.findByIdAndUpdate(
      id,
      {
        titulo: tarefa.titulo,
        descricao: tarefa.descricao,
        dataCriacao: tarefa.dataCriacao,
        dataConclusao: tarefa.dataConclusao,
        tipo: tarefa.tipo,
        categoria: tarefa.categoria,
        status: tarefa.status
        // usuarioAssociado: tarefa.Usuario
      },
      { new: true }
    );
    return updateTarefa;
  }

  async delete(id: string) {
    try {
      await tipoTarefa.findByIdAndDelete(id);
      return "Tarefa removida com exito.";
    } catch (error) {
      throw new Error(`Erro ao remover tarefa, erro: ${error}`);
    }
  }
}

export default new TarefaService();
