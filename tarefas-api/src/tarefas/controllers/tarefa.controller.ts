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
    const status = req.params.status;
    const concluidasTarefas = await tarefaService.findConcluidas(status);
    res.json(concluidasTarefas);
  }
}

export default new TarefaController();
