const botao = document.getElementById("buscarUsuarios");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", buscarUsuarios);

async function buscarUsuarios() {
  resultado.innerHTML = "Carregando usuários...";

  try {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!resposta.ok) {
      throw new Error("Erro na requisição");
    }

    const usuarios = await resposta.json();

    resultado.innerHTML = "";

    usuarios.forEach((usuario) => {
      const divUsuario = document.createElement("div");
      divUsuario.classList.add("usuario");

      const nome = document.createElement("h3");
      nome.textContent = usuario.name;

      const email = document.createElement("p");
      email.textContent = usuario.email;
      email.classList.add("email");

      divUsuario.appendChild(nome);
      divUsuario.appendChild(email);

      resultado.appendChild(divUsuario);
    });
  } catch (erro) {
    console.error(erro);

    resultado.innerHTML = `
            <p style="color:red">
            Erro ao buscar os dados. A API pode não estar respondendo.
            </p>
        `;
  }
}
