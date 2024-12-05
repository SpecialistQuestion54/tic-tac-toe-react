import Square from "../Square";
import "./index.css";
import { useState } from 'react';
export default function Board() {
    let [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    
    function handleClick(i) {
        const nextSquare = squares.slice();
        if (!squares[i] && !calculateWinner(squares)) {
            if (xIsNext) {
                nextSquare[i] = "X";
                setXIsNext(false);
            }
            else {
                nextSquare[i] = "O";
                setXIsNext(true);
            }
        }
        setSquares(nextSquare);
    }
    
    let status;
    const winner = calculateWinner(squares);
    if (winner) {
        status = "Winner: " + winner;
    }
    else {
        status = "Next Player: " + (xIsNext ? "X" : "O");
    }

    return (<>
        <div>{status}</div>
        <div className="Board">
            <div className="board-row">
                <Square value={squares[0]} onSqaureClick={() => handleClick(0)} />
                <Square value={squares[1]} onSqaureClick={() => handleClick(1)} />
                <Square value={squares[2]} onSqaureClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSqaureClick={() => handleClick(3)} />
                <Square value={squares[4]} onSqaureClick={() => handleClick(4)} />
                <Square value={squares[5]} onSqaureClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSqaureClick={() => handleClick(6)} />
                <Square value={squares[7]} onSqaureClick={() => handleClick(7)} />
                <Square value={squares[8]} onSqaureClick={() => handleClick(8)} />
            </div>
        </div>
    </>)
}

function calculateWinner(squares) {
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
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}