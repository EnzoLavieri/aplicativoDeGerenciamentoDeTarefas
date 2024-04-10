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
        status: tarefa.status,
        usuarioAssociado: tarefa.usuario,
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

  // ----------- Funcionalidades Adicionais utilizando Métodos de Array -----------

  async findPorCategoria(categoria: string) {
    const filteredTarefas = await tipoTarefa.find({ categoria: categoria });
    return filteredTarefas;
  }

  async findConcluidas(status: string) {
    const concluidasTarefas = await tipoTarefa.find({ status: "concluida" });
    return concluidasTarefas;
  }

  async findPendentes(status: string) {
    const pendentesTarefas = await tipoTarefa.find({ status: "pendente" });
    return pendentesTarefas;
  }

  async countTotalTarefasUsuario(usuarioId: string) {
    const totalTarefas = await tipoTarefa.countDocuments({
      usuarioAssociado: usuarioId,
    });
    return totalTarefas;
  }

  async findMaisRecente(usuarioId: string) {
    const tarefaMaisRecente = await tipoTarefa
      .findOne({
        usuarioAssociado: usuarioId,
      })
      .sort({ createdAt: -1 });
    return tarefaMaisRecente;
  }

  // ----------- Funcionalidades com Métodos de Array: -----------

  async calcularMediaConclusao(): Promise<number> {
    const concluidasTarefas = await tipoTarefa.find({ status: "concluida" });
    const totalTarefas = await tipoTarefa.countDocuments();
    const mediaConclusao = (concluidasTarefas.length / totalTarefas) * 100;
    return mediaConclusao;
  }

  async findDescMaisLonga() {
    const tarefas = await tipoTarefa.aggregate([
      {
        $project: {
          descricao: 1,
          numeroDeCaracter: { $strLenCP: "$descricao" },
        },
      },
      {
        $sort: { numeroDeCaracter: -1 },
      },
      {
        $limit: 1,
      },
    ]);
    return tarefas;
  }

  async findAgrupCategoria(categoria: string) {
    const tarefasPorCategoria = await tipoTarefa.aggregate([
      {
        $group: {
          _id: "$categoria",
          totalTarefas: { $sum: 1 },
        },
      },
    ]);
    return tarefasPorCategoria;
  }

  async findMaisAntiga(usuarioId: string) {
    const tarefaMaisAntiga = await tipoTarefa
      .findOne({
        usuarioAssociado: usuarioId,
      })
      .sort({ createdAt: 1 });
    return tarefaMaisAntiga;
  }
}

export default new TarefaService();
