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
    //  []*9
    const [state, setState] = useState(Array(9).fill(null));
    function clickState(idx) {
        const newState = state.slice();
        newState[idx] = "X";
        setState(newState);
    };
    return (
        //  setter via param, props to child
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
