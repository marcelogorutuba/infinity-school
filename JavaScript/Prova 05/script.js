let tarefas = [];

function adicionarTarefa() {
  const input = document.getElementById("taskInput");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Digite uma tarefa");
    return;
  }

  tarefas.push({
    nome: nome,
    concluida: false,
  });

  input.value = "";

  listarTarefas();
}

function listarTarefas() {
  const lista = document.getElementById("listaTarefas");
  lista.innerHTML = "";

  for (let i = 0; i < tarefas.length; i++) {
    const tarefa = tarefas[i];

    const li = document.createElement("li");

    if (tarefa.concluida) {
      li.classList.add("concluida");
    }

    li.innerHTML = `
            ${tarefa.concluida ? "✅" : "⏳"} ${tarefa.nome}

            <div class="actions">
                <button onclick="concluirTarefa(${i})">✔</button>
                <button onclick="removerTarefa(${i})">🗑</button>
            </div>
        `;

    lista.appendChild(li);
  }
}

function removerTarefa(indice) {
  tarefas.splice(indice, 1);

  listarTarefas();
}

function concluirTarefa(indice) {
  tarefas[indice].concluida = !tarefas[indice].concluida;

  listarTarefas();
}
