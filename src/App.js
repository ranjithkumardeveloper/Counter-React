import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const handleOnClick = () => {
    setCounter(counter + 1);
  };

  const handleOnClickDe = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>Simple Counter</div>
        <div className="mt-4">{counter}</div>
        <div className="mt-3">
          <button className="mx-2" onClick={handleOnClick}>
            Increment
          </button>
          <button onClick={handleOnClickDe}>Decrement</button>
        </div>
      </header>
    </div>
  );
}

export default App;
