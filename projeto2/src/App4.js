import React from 'react';
import Card from './components/Card'
import './style.css'

class App4 extends React.Component {
  state = {
    users: []
  }

  async componentDidMount() {
    const newUsers = await fetch("https://api.github.com/users");
    const usersJson = await newUsers.json();
    this.setState({ users: usersJson })
  }

  render() {  // render sempre tem return e o map também, por isso dois returns
    // console.log(this.state.users)    
    return (
      <div>
        <h1 className="componentDiMountAPI">Exemplo2 com componentDidMount</h1>
        {
         this.state.users.map(user => {      
          return ( // cria uma div para cada usuário dentro da outra div
            <div className='container' key={user.id}> 
              <Card name={user.login} picture={user.avatar_url}/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App4;