import './App.css';
import {useState} from "react";
import {getNextKeyDef} from "@testing-library/user-event/dist/keyboard/getNextKeyDef";

function Square( { value, clickButton } ) {
    return (
        <button
            className="square"
            onClick={ clickButton }
        >
            { value }
        </button>
    );
}
function Board({ xFlag, state, onPlay }) {
    function clickState(idx) {
        //  No actions if clicked or Declared Winner
        if (state[idx] || calcWinner(state)) return ;

        const newState = state.slice();
        newState[idx] = xFlag ? 'X' : 'O';
        onPlay( newState );
    };
    function calcWinner( square ) {
        //  Combination of Cases
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (let i = 0; i < lines.length; ++i) {
            const [a, b, c] = lines[i];
            if (square[a] && square[a] === square[b] && square[a] === square[c]) return true;
        }
        return null;
    }

    let status = calcWinner(state) ? `Winner is ${!xFlag ? 'X' : 'O'}` : `Next is ${xFlag ? 'X' : 'O'}`;

    return (
        <>
            <div className="status">{ status }</div>
            <div className="row">
                <Square value={ state[0] } clickButton={ () => clickState(0) } />
                <Square value={ state[1] } clickButton={ () => clickState(1) } />
                <Square value={ state[2] } clickButton={ () => clickState(2) } />
            </div>
            <div className="row">
                <Square value={ state[3] } clickButton={ () => clickState(3) } />
                <Square value={ state[4] } clickButton={ () => clickState(4) } />
                <Square value={ state[5] } clickButton={ () => clickState(5) } />
            </div>
            <div className="row">
                <Square value={ state[6] } clickButton={ () => clickState(6) } />
                <Square value={ state[7] } clickButton={ () => clickState(7) } />
                <Square value={ state[8] } clickButton={ () => clickState(8) } />
            </div>
        </>
    );
}
export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [xFlag, setXFlag] = useState(true);
    const [currentMove, setCurrentMove] = useState(0);
    const currentHistory = history[currentMove];

    function handlePlay( newState ) {
        //  Like history.append( newState );
        const nextHistory = [...history.slice(0, currentMove + 1), newState];
        setHistory( nextHistory );
        setCurrentMove(nextHistory.length - 1)
        setXFlag(!xFlag);
    }

    function jumpTo( nextMove ) {
        setCurrentMove(nextMove);
        setXFlag(nextMove % 2 === 0);
    }

    const moves = history.map((state, move) => {
        let desc = move > 0 ? `Go to move #${ move }` : 'Go to GameStart';
        return (
            <li>
                <button onClick={ () => jumpTo(move)}>{ desc }</button>
            </li>
        );
    })

    return (
        <div className="game">
            <div className="game-board">
                <Board state = { currentHistory } xFlag={ xFlag } onPlay={ handlePlay }/>
            </div>
            <div className="game-info">
                <ol> { moves } </ol>
            </div>
        </div>
    );
}