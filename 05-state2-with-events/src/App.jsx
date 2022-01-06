import React, { Component } from 'react';

class App extends Component {
  state = { number : 5 }

  handleIncrementClick = () => {
    this.setState( {
      number: this.state.number + 1
    })
  }

  handleDecrementClick = () => {
    this.setState( {
      number: this.state.number - 1
    })
  }

  handleResetClick = () => {
    this.setState( {
      number: 0
    })
  }

  render() {
    return (
      <>
        <h1>Numbe: { this.state.number }</h1>
        <button onClick={this.handleIncrementClick}>Increment</button>
        <button onClick={this.handleDecrementClick}>Decrement</button>
        <button onClick={this.handleResetClick}>Reset</button>
      </>
    );
  }
}

export default App;