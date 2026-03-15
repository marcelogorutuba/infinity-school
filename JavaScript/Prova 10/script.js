const input = document.getElementById("tarefaInput");
const botaoAdicionar = document.getElementById("addTarefa");
const lista = document.getElementById("listaTarefas");
const contador = document.getElementById("contador");

function atualizarContador() {
  contador.textContent = "Tarefas: " + lista.children.length;
}

function criarTarefa(texto) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = texto;

  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "Remover";
  botaoRemover.classList.add("remover");

  span.addEventListener("click", function () {
    li.classList.toggle("concluida");
  });

  botaoRemover.addEventListener("click", function (e) {
    e.stopPropagation();
    lista.removeChild(li);
    atualizarContador();
  });

  li.appendChild(span);
  li.appendChild(botaoRemover);

  lista.appendChild(li);

  atualizarContador();
}

botaoAdicionar.addEventListener("click", function () {
  const texto = input.value.trim();

  if (texto === "") {
    alert("Digite uma tarefa!");
    return;
  }

  criarTarefa(texto);

  input.value = "";
  input.focus();
});

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    botaoAdicionar.click();
  }
});
