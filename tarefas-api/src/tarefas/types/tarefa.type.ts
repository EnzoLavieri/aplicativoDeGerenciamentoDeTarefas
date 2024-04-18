import { UsuarioType } from "../types/usuario.type";
import { CategoriaType } from "../types/categoria.type";

export interface TarefaType {
  id: Number;
  titulo: String;
  descricao?: String;
  dataCriacao: Date;
  dataConclusao?: Date;
  dataVencimento: Date;
  tipo: String;
  categoria: CategoriaType;
  status: "pendente" | "em andamento" | "concluida";
  usuario: UsuarioType;
}
