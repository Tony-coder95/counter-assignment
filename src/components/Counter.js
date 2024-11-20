import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

function increment() {
  console.log('Increment function called');
  setCount((prevCount) => prevCount + 1);
}

function decrement() {
  console.log('Decrement function called');
  setCount((prevCount) => prevCount - 1);
}

  return (
    <div>
      <h2>Counter</h2>
      <p data-testid="count">{count}</p>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
    </div>
  );
}
