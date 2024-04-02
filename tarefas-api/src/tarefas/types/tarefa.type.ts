export interface TarefaType {
  id: Number;
  titulo: String;
  descricao: String;
  dataCriacao: Date;
  dataConclusao: Date;
  tipo: String;
  categoria: String;
  status: {
    pendente;
    andamento;
    concluída;
  }; // usuarioAssociado: Usuario;
}
