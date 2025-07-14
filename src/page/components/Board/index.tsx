import Square from "../Square/html";
import styles from "./styles.module.css"
function calculateWinner(squares: (string | null)[]) {
  
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for(let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
   }

export default function Board({xIsNext, squares, onPlay}:{xIsNext:boolean, squares:(string | null)[], onPlay:(newSquares: (string | null)[])=>void}) {
  function handleClick(i:number) {
    // 通过slice()浅拷贝创建新数组，防止操作影响到原数组
    if(squares[i] || calculateWinner(squares)) return;
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? "X" : "O";
    onPlay(newSquares);
  }
  const winner = calculateWinner(squares);
  let status;
  if(winner) {
    console.log(winner)
    status = "final winner is " + winner;

  } else {
    status = "Next step is " + (xIsNext ? "X" : "O");
  console.log(xIsNext, squares, onPlay)
  }

  return (
    <>
      <h3>{status}</h3>
      <div className={styles.boardRow}>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className={styles.boardRow}>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className={styles.boardRow}>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </>
  );
}