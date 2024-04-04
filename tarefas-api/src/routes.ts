import { Router } from "express";
import categoriaController from "./tarefas/controllers/categoria.controller";
import tarefaController from "./tarefas/controllers/tarefa.controller";
import usuarioController from "./tarefas/controllers/usuario.contoller";

const routes = Router();

routes.post("/categorias", categoriaController.create);
routes.get("/categorias", categoriaController.findAll);
routes.get("/categorias/:id", categoriaController.findById);
routes.put("/categorias/:id", categoriaController.update);
routes.delete("/categorias/:id", categoriaController.delete);

//-----------------------------------------------------------------------

routes.post("/tarefas", tarefaController.create);
routes.get("/tarefas", tarefaController.findAll);
routes.get("/tarefas/:id", tarefaController.findById);
//

// rota para fazer o find por categoria de tarefa
routes.get(
  "/tarefas/por-categoria/:categoria",
  tarefaController.findPorCategoria
);
// rota que busca as tarefas concluidas - arrumar, esta buscando por id e dando erro
routes.get("/tarefas/concluidas", tarefaController.findConcluidas);
// rota que busca as tarefas pendentes - arrumar, esta buscando por id e dando erro
routes.get("/tarefas/pendentes", tarefaController.findPendentes);
//
routes.get("/tarefas/periodo", tarefaController.findPorPeriodo);

//
routes.put("/tarefas/:id", tarefaController.update);
routes.delete("/tarefas/:id", tarefaController.delete);

//-----------------------------------------------------------------------

routes.post("/usuarios", usuarioController.create);
routes.get("/usuarios", usuarioController.findAll);
routes.get("/usuarios/:id", usuarioController.findById);
routes.put("/usuarios/:id", usuarioController.update);
routes.delete("/usuarios/:id", usuarioController.delete);

export { routes };
