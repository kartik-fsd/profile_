//Build a counter with a history of the values and ability to undo/redo actions.

import { useState } from "react";
import "./counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([0]);
  const [currentStep, setCurrentStep] = useState(0);
  

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    // Save the count to history and update current step
    setCurrentStep(currentStep + 1);
    const newHistory = history.slice(0, currentStep + 1);
    setHistory([...newHistory, newCount]);
  };

  const handleDecrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    // Save the count to history and update current step
    setCurrentStep(currentStep + 1);
    const newHistory = history.slice(0, currentStep + 1);
    setHistory([...newHistory, newCount]);
  };

  const handleUndo = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setCount(history[currentStep - 1]);
    }
  };

  const handleRedo = () => {
    if (currentStep < history.length - 1) {
      setCurrentStep(currentStep + 1);
      setCount(history[currentStep + 1]);
    }
  };

  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <div className="counter-btns">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleUndo} disabled={currentStep === 0}>
          Undo
        </button>
        <button onClick={handleRedo} disabled={currentStep === history.length - 1}>
          Redo
        </button>
      </div>
    </div>
  );
}

export default Counter;
