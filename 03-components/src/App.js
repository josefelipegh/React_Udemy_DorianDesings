import './App.css';

// Components
import Header from './components/Header';
import Person from './components/Person';

function App() {
  return (
    <>
      <Header/>
      <Person 
              info={
                {
                  age:27,
                  birthday:new Date(1994, 4, 25),
                  name:"Felipe"
                }
              }
              hobbies={['video juegos', 'viajar', 'y salir']}
              bio={<p>Lorem ipsum dolor...</p>}
              render
      />
      <Person 
              info={
                {
                  age:30,
                  birthday:new Date(1990, 1, 7),
                  name:"Carlos"
                }
              }
              hobbies={['video juegos', 'viajar', 'y salir']}
              bio={<p>Lorem ipsum dolor...</p>}
      />
      <Person 
              info={
                {
                  age:56,
                  birthday:new Date(1965, 10, 24),
                  name:"Marta"
                }
              }
              hobbies={['video juegos', 'viajar', 'y salir']}
      />
    </>
  );
}

export default App;
