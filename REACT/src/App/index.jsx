import "./index.css";
import StatusBar from "../StatusBar";
import Board from "../Board";
import MoveHistory from "../MoveHistory";
import { useState } from "react";
import { getCurrentPlayer } from "../functions/getCurrentPlayer";
import { getGameStatus } from "../functions/getGameStatus";

export default function App() {
  const [history, setHistory] = useState([
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "X", "", "", "", "", "", ""],
    ["", "", "X", "", "O", "", "", "", ""],
    ["", "", "X", "", "O", "", "X", "", ""],
    ["", "", "X", "", "O", "", "X", "O", ""],
    ["", "", "X", "", "O", "", "X", "O", "X"],
    ["", "O", "X", "", "O", "", "X", "O", "X"],
  ]);

  const [roundOnBoard, setRoundOnBoard] = useState(6);

  
  const gameStatus = getGameStatus(history, roundOnBoard);

  return (
    <div className="app-container">
      <div>
        <StatusBar texto={gameStatus} />
        <Board
          squares={history[roundOnBoard]}
          history={history}
          setHistory={setHistory}
          roundOnBoard={roundOnBoard}
          setRoundOnBoard={setRoundOnBoard}
        />
      </div>
      <MoveHistory
        setRoundOnBoard={setRoundOnBoard}
        totalRounds={history.length - 1}
      />
    </div>
  );
}
