function verifyWinner(boardState, player) {
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

  let someCombination = false;
  for (let i = 0; i < winningCombinations.length; i++) {
    let everyPosition = true;
    for (let j = 0; j < 3; j++) {
      if (winningCombinations[i][j] !== player) everyPosition = false;
    }
    if (everyPosition) someCombination = true;
  }

  return someCombination;
}
