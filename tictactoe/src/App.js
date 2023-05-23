import './App.css';
import {useState} from "react";

function Square() {
    //  return [ state, state.setter ]
    const [state, setState] = useState(null);

    //  called setState() when clicked
    const click = () => {
        setState('X');
    }
    return <button
        className="square"
        onClick={ click }>
        { state }
    </button>
}
export default function Board() {

    return (
        //  <></> => wrapping tags
        <>
            <div className="row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="row">
                <Square />
                <Square />
                <Square />
            </div>
        </>
    );
}
