const form = document.getElementById("formCadastro");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  limparErros();

  try {
    const nome = document.getElementById("nome").value.trim();
    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const email = document.getElementById("email").value.trim();
    const nascimento = document.getElementById("nascimento").value;

    validarNome(nome);
    validarUsuario(usuario);
    validarSenha(senha);
    validarEmail(email);
    validarIdade(nascimento);

    document.getElementById("mensagemSucesso").textContent =
      "Cadastro realizado com sucesso!";

    form.reset();
  } catch (erro) {
    mostrarErro(erro.campo, erro.message);
  }
});

function limparErros() {
  const erros = document.querySelectorAll(".erro");

  erros.forEach((e) => {
    e.textContent = "";
  });

  document.getElementById("mensagemSucesso").textContent = "";
}

function mostrarErro(campo, mensagem) {
  document.getElementById(campo).textContent = mensagem;
}

function validarNome(nome) {
  if (nome === "") {
    throw { campo: "erroNome", message: "O nome é obrigatório" };
  }

  if (nome.length < 3) {
    throw {
      campo: "erroNome",
      message: "O nome deve ter pelo menos 3 caracteres",
    };
  }
}

function validarUsuario(usuario) {
  if (usuario === "") {
    throw { campo: "erroUsuario", message: "O usuário é obrigatório" };
  }

  if (usuario.length < 4) {
    throw {
      campo: "erroUsuario",
      message: "O usuário deve ter no mínimo 4 caracteres",
    };
  }
}

function validarSenha(senha) {
  if (senha === "") {
    throw { campo: "erroSenha", message: "A senha é obrigatória" };
  }

  if (senha.length < 6) {
    throw {
      campo: "erroSenha",
      message: "A senha deve ter pelo menos 6 caracteres",
    };
  }
}

function validarEmail(email) {
  if (email === "") {
    throw { campo: "erroEmail", message: "O email é obrigatório" };
  }

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(email)) {
    throw { campo: "erroEmail", message: "Email inválido" };
  }
}

function validarIdade(data) {
  if (data === "") {
    throw {
      campo: "erroNascimento",
      message: "Informe sua data de nascimento",
    };
  }

  const hoje = new Date();
  const nascimento = new Date(data);

  let idade = hoje.getFullYear() - nascimento.getFullYear();

  const mes = hoje.getMonth() - nascimento.getMonth();

  if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }

  if (idade < 18) {
    throw {
      campo: "erroNascimento",
      message: "É necessário ter 18 anos ou mais",
    };
  }
}
