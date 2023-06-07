import {Residencia} from '../Residencia/Residencia'
import {Experiencias} from '../Experiencias/Experiencias' 
import {Cursos} from '../Cursos/Cursos'
import './App.css';
// import com chaves é mais seguro (recomendado)

function App() {
  return (
    <div>
    <header>
      <h1>Currículo - Victor Hugo Borges - REACT</h1>
    </header>
     
    <Residencia />
    <Experiencias />
    <Cursos />

    <footer>
    <div>
      <div>
        <h5>Acompanhe-me nas redes sociais através dos links abaixo</h5>
        <a className="Linkedin"
        href="https://www.linkedin.com/in/victorhbfsouza/"
        target="_blank"
        rel="noopener noreferrer">
        Linkedin
        </a>
      </div>
      <div>
        <a className="Github"
        href="https://github.com/victorhbfsouza"
        target="_blank"
        rel="noopener noreferrer">
        Github
        </a>
      </div>
    </div>
    </footer>
    </div>
  );
}

export default App;
