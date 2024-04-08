import { Schema, model } from "mongoose";

const tarefaSchema = new Schema(
  {
    id: Number,
    titulo: String,
    descricao: String,
    dataCriacao: Date,
    dataConclusao: Date,
    //Perguntar se é para adicionar o atributo de dataVencimento, pois ele pede
    //para criar uma rota para listar tarefas que vencem em um determinado período.
    dataVencimento: Date,
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
    // perguntar se o usuarioAssociado era para funcionar com o objectId, ou por string do nome do Usuario
    usuarioAssociado: {
      type: Schema.Types.ObjectId,
      ref: "Usuario",
    },
  },
  { timestamps: true }
);

export default model("Tarefa", tarefaSchema);
