import './App.css';
import Container from './Container';

function App() {
  return (
    <div className="App">
      <header>
        <h3>Number Guessing Game</h3>
        <div className="game-details">
          <p>Try and guess a random number between 1 and 100</p>
          <p>You have ten attempts to guess the right number.</p>
        </div>
      </header>
      <Container />
    </div>
  );
}

export default App;
