import './App.css';
import {useState} from "react";

function App() {
    /**
     * @summary : useState(Hooks), State Manager
     * @param : initialState
     * @return : [ state{initialState}, setter ]
     */
    const [count, countSet] = useState(0);

    /**
     * TODO : Learn Closure later
     * @summary : Record Lexical environ(in, out)
     */
    function MyButton(){
        countSet(count + 1);
    }
  return (
      <button onClick={MyButton}>
          Click : { count }
      </button>
  );
}

export default App;