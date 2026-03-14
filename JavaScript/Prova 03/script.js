let nomes = [];

function adicionarNome() {
  let input = document.getElementById("nomeInput");
  let nome = input.value.trim();

  if (nome === "") {
    alert("Digite um nome válido");
    return;
  }

  nomes.push(nome);

  input.value = "";
  input.focus();
}

function finalizarCadastro() {
  if (nomes.length === 0) {
    alert("Nenhum nome foi adicionado");
    return;
  }

  let listaIndice = document.getElementById("listaIndice");
  let listaBoasVindas = document.getElementById("listaBoasVindas");

  listaIndice.innerHTML = "";
  listaBoasVindas.innerHTML = "";

  for (let i = 0; i < nomes.length; i++) {
    let item = document.createElement("li");
    item.textContent = `${i + 1}: ${nomes[i]}`;

    listaIndice.appendChild(item);
  }

  for (let nome of nomes) {
    let item = document.createElement("li");
    item.textContent = `Bem-vindo(a), ${nome}!`;

    listaBoasVindas.appendChild(item);
  }

  while (true) {
    console.log("Cadastro finalizado");

    break;
  }
}
