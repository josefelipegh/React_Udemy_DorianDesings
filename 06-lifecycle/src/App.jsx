import React, { Component } from 'react';

// Components
import Header from './components/Header';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = { number: 0 }
    //Bindear eventos
    console.log('CONSTRUCTOR')
  }

  render() {
    console.log('RENDER')

    // HACER UN SETSTATE EN RENDERGENERA UN BUCLE INFINITO
    // this.setState({ number: 23 })

    if(false) {
      return (
        <>
          <h1>Lifecycle</h1>
          <h2>Number of state: {this.state.number}</h2>
        </>
      );
    } 
    
    // Disponible desde la version 16
    else return null
  }
}

export default App;