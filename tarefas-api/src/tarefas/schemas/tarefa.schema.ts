import { Schema, model } from "mongoose";
import Usuario from "../schemas/usuario.schema";

const tarefaSchema = new Schema(
  {
    id: Number,
    titulo: String,
    descricao: String,
    dataCriacao: Date,
    dataConclusao: Date,
    tipo: String,
    categoria: String,
    // status nao ta aparecendo
    status: {
      type: String,
      enum: ["pendente", "andamento", "concluída"],
    },
    usuarioAssociado: { type: Schema.Types.ObjectId, ref: "Usuario" },
    // actions: [{ type: Schema.Types.ObjectId, ref: "Usuario" }],
    // usuarioAssociado: Usuario,
  },
  { timestamps: true }
);

export default model("Tarefa", tarefaSchema);
