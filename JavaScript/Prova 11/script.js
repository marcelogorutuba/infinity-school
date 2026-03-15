const form = document.querySelector("#formCadastro");
const listaUsuarios = document.querySelector("#listaUsuarios");
const botaoLimpar = document.querySelector("#limparLista");

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const telefone = document.querySelector("#telefone");
const dataNascimento = document.querySelector("#dataNascimento");
const email = document.querySelector("#email");

function validarTelefone(numero) {
  const regex = /^[0-9]{10,11}$/;

  return regex.test(numero);
}

function calcularIdade(data) {
  const hoje = new Date();
  const nascimento = new Date(data);

  let idade = hoje.getFullYear() - nascimento.getFullYear();

  const mes = hoje.getMonth() - nascimento.getMonth();

  if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }

  return idade;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nomeValor = username.value.trim();
  const senhaValor = password.value.trim();
  const telefoneValor = telefone.value.trim();
  const dataValor = dataNascimento.value;
  const emailValor = email.value.trim();

  if (
    !nomeValor ||
    !senhaValor ||
    !telefoneValor ||
    !dataValor ||
    !emailValor
  ) {
    console.error("Erro: Todos os campos precisam ser preenchidos.");
    alert("Preencha todos os campos!");

    return;
  }

  if (!validarTelefone(telefoneValor)) {
    console.error("Telefone inválido");
    alert("Digite um telefone válido (apenas números).");

    return;
  }

  const idade = calcularIdade(dataValor);

  if (idade < 18) {
    console.error("Usuário menor de idade");
    alert("Cadastro permitido apenas para maiores de 18 anos.");

    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `
<strong>Nome:</strong> ${nomeValor} |
<strong>Email:</strong> ${emailValor} |
<strong>Telefone:</strong> ${telefoneValor} |
<strong>Idade:</strong> ${idade}
`;

  listaUsuarios.appendChild(li);

  form.reset();
});

botaoLimpar.addEventListener("click", function () {
  listaUsuarios.innerHTML = "";
});