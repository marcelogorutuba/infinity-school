const inputTitulo = document.getElementById("tituloNota");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaNotas = document.getElementById("listaNotas");

const STORAGE_KEY = "notas_app";

function obterNotas() {
  const notas = localStorage.getItem(STORAGE_KEY);

  return notas ? JSON.parse(notas) : [];
}

function salvarNotas(notas) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notas));
}

function renderizarNotas() {
  listaNotas.innerHTML = "";

  const notas = obterNotas();

  notas.forEach((nota) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = nota.titulo;

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.classList.add("remover");

    btnRemover.addEventListener("click", () => {
      removerNota(nota.id);
    });

    li.appendChild(span);
    li.appendChild(btnRemover);

    listaNotas.appendChild(li);
  });
}

function adicionarNota() {
  const titulo = inputTitulo.value.trim();

  if (!titulo) {
    alert("Digite um título para a nota");
    return;
  }

  const notas = obterNotas();

  const existe = notas.some((nota) => nota.titulo === titulo);

  if (existe) {
    alert("Já existe uma nota com esse título");
    return;
  }

  const novaNota = {
    id: Date.now(),
    titulo: titulo,
  };

  notas.push(novaNota);

  salvarNotas(notas);

  inputTitulo.value = "";

  renderizarNotas();
}

function removerNota(id) {
  let notas = obterNotas();

  notas = notas.filter((nota) => nota.id !== id);

  salvarNotas(notas);

  renderizarNotas();
}

btnAdicionar.addEventListener("click", adicionarNota);

inputTitulo.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    adicionarNota();
  }
});

document.addEventListener("DOMContentLoaded", renderizarNotas);
