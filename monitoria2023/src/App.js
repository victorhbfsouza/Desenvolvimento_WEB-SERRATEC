import logo from '../src/Victor.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Conheça um pouco sobre o meu trabalho!
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/victorhbfsouza/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clique e acesse meu linkedin
        </a>
      </header>
    </div>
  );
}

export default App;
