To-Do List
Este é um simples aplicativo de lista de tarefas (To-Do List) em JavaScript. O aplicativo permite adicionar, marcar como concluído e remover tarefas, além de filtrar tarefas pendentes e concluídas. Ele também salva e recupera tarefas usando o localStorage.

Funcionalidades
Adicionar novas tarefas com diferentes níveis de prioridade.
Marcar tarefas como concluídas.
Remover tarefas da lista.
Filtrar tarefas pendentes e concluídas.
Persistência de dados usando localStorage.
Tecnologias Usadas
HTML
CSS
JavaScript
ChatGPT
Estrutura do Projeto
HTML
O HTML fornece a estrutura básica da aplicação, incluindo um campo de entrada para novas tarefas, botões de prioridade, um botão para adicionar tarefas e uma área para filtrar e exibir tarefas.

CSS
O CSS é utilizado para estilizar a aplicação, incluindo a aparência das tarefas e a prioridade das tarefas.

JavaScript
O JavaScript é utilizado para:

Gerenciar o estado das tarefas.
Manipular o DOM para adicionar, remover e atualizar tarefas.
Salvar e recuperar tarefas do localStorage.
Filtrar tarefas com base no seu status (pendente ou concluído).
Como Usar
Adicionar uma Tarefa
Digite a tarefa no campo de entrada.
Selecione a prioridade (Importante, Média, Suave).
Clique no botão "Add" para adicionar a tarefa à lista.
Marcar uma Tarefa Como Concluída
Clique na tarefa para alternar o status entre pendente e concluído (marcando a tarefa com um texto riscado).
Remover uma Tarefa
Clique no ícone × ao lado da tarefa para removê-la da lista.
Filtrar Tarefas
Filtrar Tarefas Pendentes

Clique no botão "Pending" para mostrar apenas as tarefas pendentes (aquelas que não estão marcadas como concluídas).
Filtrar Tarefas Concluídas

Clique no botão "Success" para mostrar apenas as tarefas concluídas (aquelas que estão marcadas com um texto riscado).
Persistência de Dados
O aplicativo usa o localStorage para salvar e recuperar a lista de tarefas. Isso garante que as tarefas sejam preservadas mesmo após atualizar a página.