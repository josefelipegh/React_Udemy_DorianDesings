import React, { Component } from 'react';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = { number: 0 }
    //Bindear eventos
    console.log('CONSTRUCTOR')
  }

  render() {
    console.log('RENDER')
    return (
      <>
        <h1>Lifecycle</h1>
        <h2>Number of state: {this.state.number}</h2>
      </>
    );
  }
}

export default App;