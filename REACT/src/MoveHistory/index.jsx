import "./index.css";

export default function MoveHistory(props) {
  function handleClick(round) {
    props.setRoundOnBoard(round);
  }

  const historyRows = [];
  let i = 0;
  while (i <= props.totalRounds) {
    const j = i;
    if (j == 0) {
      historyRows.push(
        <li key={j}>
          <button
            onClick={() => {
              handleClick(j);
            }}
          >
            Ir para início
          </button>
        </li>
      );
    } else {
      historyRows.push(
        <li key={j}>
          <button
            onClick={() => {
              handleClick(j);
            }}
          >
            Ir para lance #{j}
          </button>
        </li>
      );
    }

    i++;
  }
  return (
    <span>
      <ol>{historyRows}</ol>
    </span>
  );
}
