import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster1: {
        name: 'Frankenstein',
      },
      monster2: {
        name: 'Dracula',
      },
      monster3: {
        name: 'Zombie',
      },
      monster4: {
        name: 'Mummy',
      },
      monster5: {
        name: 'Werewolf',
      },
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Monsterdex</h1>
        <h2>Monster 1: {this.state.monster1.name}</h2>
        <h2>Monster 2: {this.state.monster2.name}</h2>
        <h2>Monster 3: {this.state.monster3.name}</h2>
        <h2>Monster 4: {this.state.monster4.name}</h2>
        <h2>Monster 5: {this.state.monster5.name}</h2>
      </div>
    );
  }
}

export default App;
