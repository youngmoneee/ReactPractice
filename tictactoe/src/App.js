import './App.css';
import {useState} from "react";

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
export default function Board() {
    const [state, setState] = useState(Array(9).fill(null));
    const [xFlag, setXFlag] = useState(true);
    function clickState(idx) {
        const newState = state.slice();
        if (xFlag) newState[idx] = 'X';
        else newState[idx] = 'O';
        setState(newState);
        setXFlag(!xFlag);
    };

    return (
        //  Using lambda function can transfer function and params by wrapping
        //  that can be executed when event occurs, not when rendering occurs.
        <>
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
