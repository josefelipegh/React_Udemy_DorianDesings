import React, { Component } from 'react';



class App extends Component {

  constructor(props) {
    super(props)
    // Enlace de la funcion, quiere decir que el contexto de esta funcion sera igual al contexto de la clase con el bind (contexto correcto)
    // Las dos mejores opciones es funcion de flecha, sino esta.
    this.handleClick = this.handleClick.bind(this)
  }

  // Primer ejemplo
  // handleClick = () => {
  //   console.log(this)
  // }

  handleClick() {
    console.log(this)
  }

  render() {
    return (
      <>
        <h1>Events</h1>
        {/* <button onClick={this.handleClick}>Click me!</button> */}
        {/* <button onClick={() => this.handleClick()}>Click me!</button> */}
        {/* <button onClick={this.handleClick.bind(this)}>Click me!</button> */}
        <button onClick={this.handleClick}>Click me!</button>
      </>
    )
  }

}


export default App;
