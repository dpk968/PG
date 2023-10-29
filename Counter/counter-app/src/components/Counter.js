import React, { useState } from "react";
import "./Counter.css";
import Swal from 'sweetalert2';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [customInput, setCustomInput] = useState("");
  const [history, setHistory] = useState([]);

  const handleIncrement = () => {
    setCount(count + 1);
    addToHistory(`Incremented by 1`);
    setCustomInput("");
  };

  const handleDecrement = () => {
    if(count <= 0){
        Swal.fire({
            title: `Min value reached!`,
            confirmButtonText: 'OK',
            icon: 'warning',
        });
    }else{
        setCount(count - 1);
        addToHistory(`Decremented by 1`);
    }
    setCustomInput("");
  };

  const handleReset = () =>{
    const newHistory = [];
    setHistory(newHistory);
    setCount(0);
  }
  const handleCustomInput = (e) => {
    setCustomInput(e.target.value);
  };

  const addToHistory = (operation) => {
    const newHistory = [operation, ...history.slice(0, 9)];
    setHistory(newHistory);
  };

  const handleBlur = () => {
    if (/^\d+$/.test(customInput) && customInput != "" && customInput >=0) {
        const operation = `Custom operation: ${customInput}`;
        setCount(eval(`${customInput}`));
        addToHistory(operation);
        setCustomInput("");
      }else{
        Swal.fire({
            title: `Please Enter Valid Number!`,
            confirmButtonText: 'OK',
            icon: 'error',
        });
      }
  };
  return (
    <div className="counter-body">
        <h1>Counter App</h1>
            <h1>{count}</h1><br/>
        <div className="counter-main">
            <button className="round-button" onClick={handleDecrement}>-</button>
            <button className="round-button" onClick={handleReset}>Reset</button>
            <button className="round-button" onClick={handleIncrement}>+</button>
        </div>
      <br />
      <div className="custom-field">
      <input
        type="text"
        placeholder="Custom operation"
        value={customInput}
        onChange={handleCustomInput}
        className="custom-input"
        onBlur={handleBlur}
      />
      </div>
      <br />
      <h2>History:</h2>
      <ul className="histoy">
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Counter;