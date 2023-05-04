import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
        },
        {
          name: 'Dracula',
        },
        {
          name: 'Zombie',
        },
        {
          name: 'Mummy',
        },
        {
          name: 'Werewolf',
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Monsterdex</h1>
        {
          this.state.monsters.map((monster) => {
            return <h3>{monster.name}</h3>;
          })
        }
      </div>
    );
  }
}

export default App;
