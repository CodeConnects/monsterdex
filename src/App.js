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
    const pokeAPI = 'https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0';

    fetch(pokeAPI)
      .then((response) => {
        return response.json();
      }).then((pokemon) => {
        this.setState({ monsters: pokemon.results });
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
