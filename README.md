# Missao Desafio Profissional Bussola<br>

https://dontpad.com/esoft5s-a-bussola<br>
npm i -D jest @jest/globals @types/jest ts-jest supertest @types/supertest

Utilizando o template para uma API Rest fornecido em:<br>
https://github.com/TI-UNICESUMAR/2024-desafio-profissional-v-ESOFT5S-B/tree/main/27-03-2024/books-api<br>
Desenvolva um aplicativo para gerenciamento de tarefas.
<br>

check-list:check-list:<br>
[] - Entender a atividade, isso envolve ver a atividade<br>
[✓] - Instalar as dependências<br>
[✓] - Criar as entidades<br>
[✓] - Da um check se o servidor está funcionando<br>
[✓] - Criar a service para a entidade escolhida, e fazer o CRUD<br>
[✓] - Fazer a controller<br>
[✓] - Criar as rotas no arquivo de rotas<br>
[✓] - Testar as rotas<br>
[] - Partir para as rotas com regra de negócio<br>

Entidades:<br>
[✓] Usuário:<br>
--Atributos: ID, nome de usuário, peso, senha, e-mail.

[✓] Tasks:<br>
--Atributos: ID, título, descrição, data de criação, data de conclusão, tipo, categoria (opcional), status (pendente, em andamento, concluída), e usuário associado.

[✓] Categoria:<br>
--Atributos: ID, nome, cor (para identificação visual).

Tasks:<br>
[✓] Rota para criação de uma nova tarefa.<br>
[✓] Rota para listar todas as tarefas de um usuário.<br>
[✓] Rota para obter detalhes de uma tarefa específica.<br>
[✓] Rota para atualizar uma tarefa existente.<br>
[✓] Rota para excluir uma tarefa.<br>

Categorias:<br>
[✓] Rota para criação de uma nova categoria.<br>
[✓] Rota para listar todas as categorias de um usuário.<br>
[✓] Rota para obter detalhes de uma categoria específica.<br>
[✓] Rota para atualizar uma categoria existente.<br>
[✓] Rota para excluir uma categoria.<br>

Funcionalidades Adicionais utilizando Métodos de Array:<br>
[✓] Rota para filtrar tarefas por categoria.<br>
[✓] Rota para listar tarefas concluídas.<br>
[✓] Rota para listar tarefas pendentes.<br>
Rota para listar tarefas que vencem em um determinado período.<br>
Rota para contar o número total de tarefas de um usuário.<br>
Rota para encontrar a tarefa mais recente de um usuário.<br>

Funcionalidades com Métodos de Array:<br>
Rota para calcular a média de conclusão das tarefas.<br>
Rota para encontrar a tarefa com a descrição mais longa.<br>
Rota para agrupar tarefas por categoria.<br>
Rota para encontrar a tarefa mais antiga de um usuário.<br>

---

Observação:
Estas rotas podem ser implementadas utilizando os métodos .map, .filter, .resume, .some e outros métodos de manipulação de array para alcançar as funcionalidades desejadas, agregando complexidade média a difícil ao projeto.
