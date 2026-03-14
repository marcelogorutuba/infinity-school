let tarefas = [];

const adicionarTarefa = function (texto) {
  if (texto.trim() === "") {
    alert("Digite uma tarefa válida");
    return;
  }

  const tarefa = {
    descricao: texto,
    concluida: false,
  };

  tarefas.push(tarefa);

  renderizarTarefas();
};

const renderizarTarefas = () => {
  const lista = document.getElementById("listaTarefas");

  lista.innerHTML = "";

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement("li");

    if (tarefa.concluida) {
      li.classList.add("concluida");
    }

    li.innerHTML = `
<span>${index} - ${tarefa.descricao}</span>

<div class="acoes">
<button onclick="executarOperacao(concluirTarefa, ${index})">✔</button>
<button onclick="executarOperacao(removerTarefa, ${index})">🗑</button>
<button onclick="editarTarefa(${index})">✏</button>
</div>
`;

    lista.appendChild(li);
  });
};

function executarOperacao(callback, indice) {
  callback(indice);
  renderizarTarefas();
}

function removerTarefa(indice) {
  tarefas.splice(indice, 1);
}

function concluirTarefa(indice) {
  tarefas[indice].concluida = true;
}

function editarTarefa(indice) {
  const novoTexto = prompt("Digite o novo texto da tarefa:");

  if (novoTexto) {
    tarefas[indice].descricao = novoTexto;
  }

  renderizarTarefas();
}

document.getElementById("btnAdicionar").addEventListener("click", () => {
  const input = document.getElementById("novaTarefa");

  adicionarTarefa(input.value);

  input.value = "";
});
