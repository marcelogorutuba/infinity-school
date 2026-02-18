let idade = Number(prompt("Digite sua idade:"));
let status = prompt("Digite seu status (registrado ou não registrado):").toLowerCase();

let maioridade = idade >= 18 ? "maior de idade" : "menor de idade";
alert("Você é " + maioridade);

switch (userStatus) {
  case "registrado":
    alert("Bem-vindo! Obrigado por se registrar.");
    break;

  case "não registrado":
    alert("Por favor, complete seu registro.");
    break;

  default:
    alert("Status desconhecido.");
}

if (idade >= 18 && userStatus === "registrado") {
  alert("Acesso completo liberado.");
} else {
  alert("Acesso limitado.");
}
