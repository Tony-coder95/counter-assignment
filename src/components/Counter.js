import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div>
      <h2>Counter</h2>
      {/* Display the current count */}
      <p data-testid="count">{count}</p>
      {/* Buttons to increment and decrement */}
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
    </div>
  );
}
