import './App.css';

// Components
import Header from './components/Header';
import Person from './components/Person';

function App() {
  return (
    <>
      <Header/>
      <Person name="Pepe" age={27} />
      <Person name="Carlos" age={30} />
      <Person name="Marta" age={56} />
    </>
  );
}

export default App;
