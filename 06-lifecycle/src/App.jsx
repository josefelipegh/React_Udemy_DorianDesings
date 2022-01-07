import React, { Component, Fragment } from 'react';

// Components
import Header from './components/Header';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = { posts: [] }
    //Bindear eventos
    console.log('CONSTRUCTOR')
  }

  async componentDidMount() {
    // PETICIONES HTTP
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(res=>res.json())
    // .then(data => console.log(data))

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    console.log(data)

    // ACTUALIZACION DEL ESTADO
    this.setState( {posts: data} )

    // ASIGNACION DE EVENTOS
    window.addEventListener('scroll', () => console.log('scroll'))
  }

  render() {
    console.log('RENDER')

    // HACER UN SETSTATE EN RENDERGENERA UN BUCLE INFINITO
    // this.setState({ number: 23 })
    const { posts } = this.state
    if(true) {
      return (
        <>
          <Header title="Lifecycle"/>
          <div>
            {
              posts.map( post => (
                <Fragment key={post.id}>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </Fragment>
              ))
            }
          </div>
        </>
      );
    } 
    
    // Disponible desde la version 16
    else return null
  }
}

export default App;