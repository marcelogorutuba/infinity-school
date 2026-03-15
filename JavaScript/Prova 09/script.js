// ===============================
// SISTEMA SIMPLES DE NOTAS ESCOLARES
// ===============================

const aluno = {
  nome: "Carlos Silva",
  idade: 20,
  notas: [8.5, 7.0, 6.5],

  calcularMedia() {
    const soma = this.notas.reduce((total, nota) => total + nota, 0);
    const media = soma / this.notas.length;
    return media;
  },
};

const { nome, idade } = aluno;

const novaNota = 9.0;

aluno.notas = [...aluno.notas, novaNota];

function verificarSituacao(media) {
  if (media >= 7) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

console.log("===== SISTEMA DE NOTAS =====");

console.log(`Aluno: ${nome}`);
console.log(`Idade: ${idade}`);

console.log("Notas do aluno:");

for (let i = 0; i < aluno.notas.length; i++) {
  console.log(`Nota ${i + 1}: ${aluno.notas[i]}`);
}

const mediaFinal = aluno.calcularMedia();

console.log(`Média Final: ${mediaFinal.toFixed(2)}`);

const situacao = verificarSituacao(mediaFinal);

console.log(`Situação: ${situacao}`);

console.log("=============================");
