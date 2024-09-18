const inputBox = document.querySelector("#inputBox");
const listContainer = document.querySelector(".list-container");
const rating = document.querySelector(".rating");

let taskDone = [];
let taskPending = [];
let setPriority = "black"; // Prioridade padrão

// Gerenciar prioridades de tarefa
rating.addEventListener("click", function(e) {
    if (e.target.classList.contains("important")) {
        setPriority = "important";
    } else if (e.target.classList.contains("average")) {
        setPriority = "average";
    } else if (e.target.classList.contains("soft")) {
        setPriority = "soft";
    } else {
        setPriority = "black"; // Cor padrão
    }
});

function addTask() {
    if (inputBox.value === '') {
        alert('Write something !!'); // Verifica se o input não está vazio
    } else {
        let li = document.createElement("li"); // Cria um elemento li
        li.innerHTML = inputBox.value; // Adiciona o valor do input ao li

        // Definir cor com base na prioridade
        if (setPriority === "important") {
            li.style.color = "red";
        } else if (setPriority === "average") {
            li.style.color = "yellow";
        } else if (setPriority === "soft") {
            li.style.color = "green";
        }

        // Adicionar o botão de remoção
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Caractere de "x" para remover
        li.appendChild(span);
        listContainer.appendChild(li); // Adiciona o li ao HTML

        taskPending.push(inputBox.value); // Adiciona a tarefa ao array de pendentes

        setPriority = "black"; // Resetar prioridade após adicionar tarefa
        inputBox.value = ''; // Limpa o input

        saveData(); // Salva as tarefas
    }
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");

        const taskText = e.target.innerText.replace('\u00d7', '').trim();

        if (e.target.classList.contains("checked")) {
            taskDone.push(taskText); // Adiciona a tarefa ao array de concluídas
            removeFromArray(taskText, taskPending); // Remove das pendentes
        } else {
            taskDone = taskDone.filter(task => task !== taskText); // Remove das concluídas
            taskPending.push(taskText); // Volta para pendentes
        }

        saveData(); // Salva as alterações
    } else if (e.target.tagName === "SPAN") {
        const li = e.target.parentElement;
        const taskText = li.innerText.replace('\u00d7', '').trim();

        removeFromArray(taskText, taskPending); // Remove da lista pendente
        taskDone = taskDone.filter(task => task !== taskText); // Remove da lista concluída
        li.remove(); // Remove o elemento li do HTML

        saveData(); // Salva as alterações
    }
}, false);

function removeFromArray(task, array) {
    const index = array.indexOf(task);
    if (index > -1) {
        array.splice(index, 1); // Remove a tarefa do array
    }
}

function saveData() {
    // Salva as listas de tarefas pendentes e concluídas
    localStorage.setItem("taskPending", taskPending.join('|')); // Salva tarefas pendentes
    localStorage.setItem("taskDone", taskDone.join('|')); // Salva tarefas concluídas
}

function showTask() {
    // Limpa o conteúdo da lista
    listContainer.innerHTML = '';

    // Restaurar tarefas pendentes
    taskPending = (localStorage.getItem("taskPending") || "").split('|').filter(task => task);
    taskPending.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = task;
        // Adicionar o botão de remoção
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Caractere de "x" para remover
        li.appendChild(span);
        listContainer.appendChild(li);
    });

    // Restaurar tarefas concluídas
    taskDone = (localStorage.getItem("taskDone") || "").split('|').filter(task => task);
    taskDone.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = task;
        li.classList.add("checked"); // Marcar como concluída

        // Adicionar o botão de remoção
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Caractere de "x" para remover
        li.appendChild(span);
        listContainer.appendChild(li);
    });
}

// Função de filtro para mostrar pendentes ou concluídas
function filterTasks(status) {
    const items = listContainer.querySelectorAll("li"); // Seleciona todas as tarefas (os `li`)
    
    items.forEach(item => {
        if (status === 'pending') {
            // Se o status for "pendente", oculta os itens que estão marcados como concluídos (com classe "checked")
            if (item.classList.contains('checked')) {
                item.style.display = 'none'; // Ocultar tarefas concluídas
            } else {
                item.style.display = 'block'; // Mostrar tarefas pendentes
            }
        } else if (status === 'success') {
            // Se o status for "sucesso", oculta os itens que não estão marcados como concluídos
            if (item.classList.contains('checked')) {
                item.style.display = 'block'; // Mostrar tarefas concluídas
            } else {
                item.style.display = 'none'; // Ocultar tarefas pendentes
            }
        }
    });
}

// Mostrar as tarefas ao carregar a página
showTask();
