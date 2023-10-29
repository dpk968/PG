import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [customInput, setCustomInput] = useState("");
  const [history, setHistory] = useState([]);

  const increment = () => {
    setCount(count + 1);
    addToHistory(`Incremented by 1`);
  };

  const decrement = () => {
    if(count <= 0){
        alert(' min value reached')
    }else{
        setCount(count - 1);
        addToHistory(`Decremented by 1`);
    }
  };

  const handleCustomInput = (e) => {
    setCustomInput(e.target.value);
  };

  const handleCustomOperation = () => {
    if (customInput !== "" && customInput >=0) {
      const operation = `Custom Input: ${customInput}`;
      setCount(eval(` ${customInput}`));
      addToHistory(operation);
      setCustomInput("");
    }else{
        alert('please enter positive value')
    }
  };

  const addToHistory = (operation) => {
    const newHistory = [operation, ...history.slice(0, 9)];
    setHistory(newHistory);
  };
  const handleReset = () =>{
    const newHistory = [];
    setHistory(newHistory);
    setCount(0);
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button className="round-button" onClick={handleReset}>Reset</button>
      <button onClick={decrement}>Decrement</button>
      <br />
      <input
        type="text"
        placeholder="Custom Input"
        value={customInput}
        onChange={handleCustomInput}
      />
      <button onClick={handleCustomOperation}>Custom Operation</button>
      <br />
      <h2>History:</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Counter;
