import React, { useState } from 'react';

const App = ({initialNumber = 23}) => {

  const [number = initialNumber, setNumber] = useState(10);

  const handleIncrement = () => {
    setNumber(number + 1)
  }

  const handleDecrement = () => {
    setNumber(number - 1)
  }

  const handleReset = () => {
    setNumber(0)
  }

  return (
    <>
      <h1>Numbe: { number }</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App;