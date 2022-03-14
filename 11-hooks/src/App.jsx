import React, { useState } from 'react';

const App = ({num}) => {

  const [number, setNumber] = useState(num);

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

// Default Props
App.defaultProps = {
  num:0
}

export default App;