import { Request, Response } from "express";
import categoriaService from "../services/categoria.service";

class CategoriaController {
  async create(req: Request, res: Response) {
    const createdCategoria = await categoriaService.create(req.body);
    res.status(201);
    return res.json(createdCategoria);
  }

  async findAll(req: Request, res: Response) {
    const findedCategoria = await categoriaService.findAll();
    return res.json(findedCategoria);
  }

  async findById(req: Request, res: Response) {
    const findedCategoria = await categoriaService.findById(req.params.id);
    return res.json(findedCategoria);
  }

  async update(req: Request, res: Response) {
    const updatedCategoria = await categoriaService.update(
      req.params.id,
      req.body
    );
    return res.json(updatedCategoria);
  }

  async delete(req: Request, res: Response) {
    const deleteMessage = await categoriaService.delete(req.params.id);
    return res.json(deleteMessage);
  }
}

export default new CategoriaController();
