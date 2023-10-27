import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    setResult(result + inputValue);
    resetInput();
  }

  function minus(e) {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    setResult(result - inputValue);
    resetInput();
  }

  function times(e) {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    setResult(result * inputValue);
    resetInput();
  }

  function divide(e) {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    
    if (inputValue === 0) {
      alert("Cannot divide by zero!");
      return;
    }
    setResult(result / inputValue);
    resetInput();
  }

  function resetInput() {
    inputRef.current.value = "";
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p>{result}</p>

        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />

        <button type="button" onClick={plus}>add</button>
        <button type="button" onClick={minus}>subtract</button>
        <button type="button" onClick={times}>multiply</button>
        <button type="button" onClick={divide}>divide</button>
        <button type="button" onClick={resetInput}>reset input</button>
        <button type="button" onClick={resetResult}>reset result</button>
      </form>
    </div>
  );
}

export default App;

