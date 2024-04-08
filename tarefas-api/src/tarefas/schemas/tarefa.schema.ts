import { Schema, model } from "mongoose";

const tarefaSchema = new Schema(
  {
    id: Number,
    titulo: String,
    descricao: String,
    dataCriacao: Date,
    dataConclusao: Date,
    tipo: String,
    categoria: {
      type: Schema.Types.ObjectId,
      ref: "Categoria",
      required: false,
    },
    status: {
      type: String,
      enum: ["pendente", "em andamento", "concluida"],
    },
    // perguntar se o usuarioAssociado era para funcionar com o objectId, ou outro especificado
    usuarioAssociado: {
      type: Schema.Types.ObjectId,
      ref: "Usuario",
    },
  },
  { timestamps: true }
);

export default model("Tarefa", tarefaSchema);
