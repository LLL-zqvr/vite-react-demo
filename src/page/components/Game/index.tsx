import Board from "../Board/index"
import { useState } from "react";
import styles from "./styles.module.css"
export default function Game() {
    const [history, setHistory] = useState<(string | null)[][]>([Array(9).fill(null)]);
    const [xIsNext, setxIsNext] = useState(true);
    const [currentmove, setCurrentMove] = useState(0);
    const currentSquares = history[currentmove];
    function handlePlay(nextSquares: (string | null)[]) {
        const nextHistory = [...history.slice(0, currentmove + 1), nextSquares];
        setxIsNext(!xIsNext);
        setCurrentMove(nextHistory.length - 1);
        setHistory(nextHistory);

    }
    function jumpToMove(nextMove:number) {
        setCurrentMove(nextMove);
        setxIsNext(nextMove % 2 === 0);
    }
    const moves = history.map((squares, move) => {
        let discription;
        if(move > 0) {
            discription = "move to step " + move;
        } else {
            discription = "go to game start";
        }
        return(
            <li key={move}>
                <button onClick={()=>jumpToMove(move)}>{discription}</button>
            </li>
        )
    })
    return (
        <div className={styles.game}>
            <div className={styles.gameBoard}>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className= {styles.gameInfo}>
                <ol>
                    {moves}
                </ol>
            </div>
        </div>
    )
}
