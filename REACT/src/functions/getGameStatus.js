import { getCurrentPlayer } from "./getCurrentPlayer";

export function getGameStatus(history, round) {
  // verificar se todas as posicoes de alguma das combinacoes
  // tem o valor do jogador da vez
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const currentPlayer = getCurrentPlayer(round);
  const previousPlayer = currentPlayer === "X" ? "O" : "X";
  const boardState = history[round];

  function verifyPositions(position) {
    return boardState[position] === previousPlayer;
  }

  function verifyCombinations(combination) {
    return combination.every(verifyPositions);
  }

  const previousPlayerWon = winningCombinations.some(verifyCombinations);

  if (previousPlayerWon) return `Vencedor: ${previousPlayer}`;
  else if (round === 9) return "Empate!";
  else return `Jogando: ${currentPlayer}`;
}

