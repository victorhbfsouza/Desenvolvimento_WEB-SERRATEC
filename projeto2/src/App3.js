import React from 'react';

class App3 extends React.Component{ 
  state = {
    users: []
  }

  async componentDidMount(){
    const fetchUsers = await fetch('https://api.github.com/users')
    const usersJson = await fetchUsers.json()
    this.setState({ users: usersJson })
  }   

    render(){
      console.log(this.state.users)

      return (
        <div>
          <h1>Exemplo do componentDidMount</h1>
          {            
            this.state.users.map(user => {
              return <h1 key = {user.id}>{user.login}</h1>
            })
          }
        </div>
      );
    }
  }

  export default App3;