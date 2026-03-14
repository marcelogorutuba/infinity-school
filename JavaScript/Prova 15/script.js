const botao = document.getElementById("btnCarregar");
const listaUsuarios = document.getElementById("listaUsuarios");
const mensagemErro = document.getElementById("erro");
const loading = document.getElementById("loading");

async function carregarUsuarios() {
  botao.disabled = true;
  loading.textContent = "Carregando usuários...";
  mensagemErro.textContent = "";
  listaUsuarios.innerHTML = "";

  try {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!resposta.ok) {
      throw new Error("Erro na requisição da API");
    }

    const usuarios = await resposta.json();

    usuarios.forEach((usuario) => {
      const item = document.createElement("li");

      item.innerHTML = `
<strong>${usuario.name}</strong><br>
<span>${usuario.email}</span>
`;

      listaUsuarios.appendChild(item);
    });

    loading.textContent = "";
  } catch (erro) {
    loading.textContent = "";
    mensagemErro.textContent =
      "Erro ao carregar os usuários. Tente novamente mais tarde.";
    console.error("Erro:", erro);
  } finally {
    botao.disabled = false;
  }
}

botao.addEventListener("click", carregarUsuarios);
