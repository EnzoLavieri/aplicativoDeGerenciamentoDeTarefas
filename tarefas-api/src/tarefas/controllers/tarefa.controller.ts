import { Request, Response } from "express";
import tarefaService from "../services/tarefa.service";

class TarefaController {
  async create(req: Request, res: Response) {
    const createdTarefa = await tarefaService.create(req.body);
    res.status(201);
    return res.json(createdTarefa);
  }

  async findAll(req: Request, res: Response) {
    const findedTarefa = await tarefaService.findAll();
    return res.json(findedTarefa);
  }

  async findById(req: Request, res: Response) {
    const findedTarefa = await tarefaService.findById(req.params.id);
    return res.json(findedTarefa);
  }

  async update(req: Request, res: Response) {
    const updatedTarefa = await tarefaService.update(req.params.id, req.body);
    return res.json(updatedTarefa);
  }

  async delete(req: Request, res: Response) {
    const deleteMessage = await tarefaService.delete(req.params.id);
    return res.json(deleteMessage);
  }

  // ----------- Funcionalidades Adicionais utilizando Métodos de Array -----------

  async findPorCategoria(req: Request, res: Response) {
    const categoria = req.params.categoria;
    const filteredTarefas = await tarefaService.findPorCategoria(categoria);
    return res.json(filteredTarefas);
  }

  async findConcluidas(req: Request, res: Response) {
    const status = req.params.status;
    const concluidasTarefas = await tarefaService.findConcluidas(status);
    res.json(concluidasTarefas);
  }

  async findPendentes(req: Request, res: Response) {
    const status = req.params.status;
    const pendentesTarefas = await tarefaService.findPendentes(status);
    res.json(pendentesTarefas);
  }

  async findPorDataVencimento(req: Request, res: Response) {
    const dataVencimentoString = req.params.dataVencimento;
    const dataVencimento = new Date(dataVencimentoString);
  }

  async countTotalTarefasUsuario(req: Request, res: Response) {
    const usuarioId = req.params.usuarioId;
    const totalTarefas = await tarefaService.countTotalTarefasUsuario(
      usuarioId
    );
    res.json({ totalTarefas });
  }

  async findMaisRecente(req: Request, res: Response) {
    const usuarioId = req.params.usuarioId;
    const tarefaMaisRecente = await tarefaService.findMaisRecente(usuarioId);
    res.json(tarefaMaisRecente);
  }

  // ----------- Funcionalidades com Métodos de Array -----------

  async calcularMediaConclusao(req: Request, res: Response) {
    const mediaConclusaoEmPorcentagem =
      await tarefaService.calcularMediaConclusao();
    res.json({ mediaConclusaoEmPorcentagem });
  }

  async getDescMaisLonga(req: Request, res: Response) {
    const descMaisLonga = await tarefaService.findDescMaisLonga();
    return res.json(descMaisLonga);
  }

  async getAgrupCategoria(req: Request, res: Response) {
    try {
      const categoria = req.params.categoria;
      const tarefasPorCategoria = await tarefaService.findAgrupCategoria(
        categoria
      );
      res.json(tarefasPorCategoria);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar tarefas por categoria" });
    }
  }

  async findMaisAntiga(req: Request, res: Response) {
    const usuarioId = req.params.usuarioId;
    const tarefaMaisAntiga = await tarefaService.findMaisAntiga(usuarioId);
    res.json(tarefaMaisAntiga);
  }
}

export default new TarefaController();
