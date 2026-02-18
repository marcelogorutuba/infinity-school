export function getCurrentPlayer(roundOnBoard) {
  //   if (roundOnBoard % 2 === 0) return "X";
  //   else return "O";

  return roundOnBoard % 2 === 0 ? "X" : "O";
}
