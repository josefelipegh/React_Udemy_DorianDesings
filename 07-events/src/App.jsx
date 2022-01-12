import React, { Component } from 'react';

class App extends Component {

  // handleClick = (e) => {
  //   console.log(e.target)
  // }

  handleClick = (e, msg) => {
    console.log(msg)
    console.log(e.target)
  }

  render() {
    return (
      <>
        <h1>Events</h1>
        {/* <button onClick={this.handleClick}>Click me!</button> */}
        <button onClick={(e) => this.handleClick(e, 'Hello')}>Click me!</button>
      </>
    )
  }

}


export default App;
