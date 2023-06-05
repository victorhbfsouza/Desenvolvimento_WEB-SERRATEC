import {Component} from './Component'
import {Experiencias} from './Experiencias' 
import {Cursos} from './Cursos'
// import com chaves é mais seguro (recomendado)

function App() {
  return (
    <div>
    <h1>Victor Hugo Borges França Souza</h1>
    <Component />
    <Experiencias />
    <Cursos />
    </div>
  );
}

export default App;
