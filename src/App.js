import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemon: [],
    };
  }

  componentDidMount() {
    const pokeAPI = 'https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0';

    fetch(pokeAPI)
      .then((response) => {
        return response.json();
      }).then((results) => {
        this.setState({ pokemon: results.results });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Pokedexer</h1>
        {
          this.state.pokemon.map((poke) => {
            return <h3 key={poke.id}>{poke.name}</h3>;
          })
        }
      </div>
    );
  }
}

export default App;
