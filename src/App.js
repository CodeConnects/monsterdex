import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'asc1',
        },
        {
          name: 'Dracula',
          id: 'asr2',
        },
        {
          name: 'Zombie',
          id: 'as1w',
        },
        {
          name: 'Mummy',
          id: '1asr',
        },
        {
          name: 'Werewolf',
          id: 'asr1',
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
            return <h3 key={monster.id}>{monster.name}</h3>;
          })
        }
      </div>
    );
  }
}

export default App;
