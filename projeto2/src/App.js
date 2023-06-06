import React from 'react';  // exemplo Componente de Classe
import './style.css';

class App extends React.Component{ // transformou a classe em componente
  name = 'Victor'  // não pode deixar a variavel solta, senão o React não entende

  // state = {  // para alterar o nome tem que deixar dentro do State!!!!
  //   name: 'Victor'  // errado acima
  // }

  state = {
    counter: 0
  }
  
  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
    console.log(this.state.counter)
  }

  handleNameChange = () => {
    this.name = "Victor Hugo"
    this.setState({name: this.name})
    console.log(this.name)  // tem que chamar de dentro do State

  // var time = new Date();
  // console.log(time)
}

  render(){  // método render é especial no React, criado para exibir algo em tela
    return (
      <>
      <h1>Class component</h1>
      {/* para funcionar este do name, tem que descomentar lá em cima */}
      <h2>Welcome, {this.name}</h2> 
      <button onClick={this.handleNameChange}>Change Name class component</button>

      <h2>{this.state.counter}</h2>
      <button onClick={this.handleIncrement}>Counter class component</button>
      </>
    )
  }
}

export default App;