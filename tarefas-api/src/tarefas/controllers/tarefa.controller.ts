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

  // ----------- Funcionalidades Adicionais utilizando Métodos de Array: -----------

  async findPorCategoria(req: Request, res: Response) {
    const categoria = req.params.categoria;
    const filteredTarefas = await tarefaService.findPorCategoria(categoria);
    return res.json(filteredTarefas);
  }

  async findConcluidas(req: Request, res: Response) {
    try {
      const tarefasConcluidas = await tarefaService.findConcluidas();
      return res.json(tarefasConcluidas);
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async findPendentes(req: Request, res: Response) {
    try {
      const tarefasPendentes = await tarefaService.findPendentes();
      return res.json(tarefasPendentes);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Erro ao buscar tarefas pendentes" });
    }
  }

  async findPorPeriodo(req: Request, res: Response) {
    const { dataInicio, dataFim } = req.body;
    const tarefasNoPeriodo = await tarefaService.findPorPeriodo(
      dataInicio,
      dataFim
    );
    return res.json(tarefasNoPeriodo);
  }
}

export default new TarefaController();
