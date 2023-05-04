import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ monsters: users });
      });
  }


  render() {
    return (
      <div className="App">
        <h1>Monsterdexer</h1>
        {
          this.state.monsters.map((monster) => {
            return <h3 key={monster.id}>{monster.name}</h3>;
          })
        }
      </div>
    );
  }
}

export default App;
