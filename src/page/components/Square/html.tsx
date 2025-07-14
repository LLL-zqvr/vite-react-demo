import styles from "./styles.module.css"

interface SquareValue {
    value: string | null;
    onSquareClick: () => void;
}

export default function Square({value, onSquareClick}: SquareValue) {

    return(
        <button className={styles.square} onClick={onSquareClick}>{value}</button>
    )
}
