import { getCurrentPlayer } from "../functions/getCurrentPlayer";
import { getGameStatus } from "../functions/getGameStatus";
import "./index.css";

export default function Board(props) {
  function handleClick(i) {
    const currentPlayer = getCurrentPlayer(props.roundOnBoard);
    const boardState = props.history[props.roundOnBoard];
    const status = getGameStatus(props.history, props.roundOnBoard);

    if (boardState[i] !== "") return;
    if (status.includes("Vencedor")) return;

    // criar uma nova rodada

    alert(i);
  }

  return (
    <>
      <div className="board-row">
        <button
          className="square"
          onClick={function () {
            handleClick(0);
          }}
        >
          {props.squares[0]}
        </button>
        <button
          className="square"
          onClick={function () {
            handleClick(1);
          }}
        >
          {props.squares[1]}
        </button>
        <button
          className="square"
          onClick={function () {
            handleClick(2);
          }}
        >
          {props.squares[2]}
        </button>
      </div>
      <div className="board-row">
        <button
          className="square"
          onClick={function () {
            handleClick(3);
          }}
        >
          {props.squares[3]}
        </button>
        <button
          className="square"
          onClick={function () {
            handleClick(4);
          }}
        >
          {props.squares[4]}
        </button>
        <button
          className="square"
          onClick={function () {
            handleClick(5);
          }}
        >
          {props.squares[5]}
        </button>
      </div>
      <div className="board-row">
        <button
          className="square"
          onClick={function () {
            handleClick(6);
          }}
        >
          {props.squares[6]}
        </button>
        <button
          className="square"
          onClick={function () {
            handleClick(7);
          }}
        >
          {props.squares[7]}
        </button>
        <button
          className="square"
          onClick={function () {
            handleClick(8);
          }}
        >
          {props.squares[8]}
        </button>
      </div>
    </>
  );
}
