import React, { Component } from 'react';

class App extends Component {

  handleClick (msg, msg2, e) {
    console.log(e)
    console.log(msg)
    console.log(msg2)
  }

  render() {
    return (
      <>
        <h1>Events</h1>
        <button onClick={this.handleClick.bind(this, 'hello', 'world')}>Click me!</button>
      </>
    )
  }

}


export default App;
