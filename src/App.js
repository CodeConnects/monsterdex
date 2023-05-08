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
        <input className='search-box' type='search' placeholder='Search Pokemon' 
          onChange={(event) => {
            const filteredPokemon = this.state.pokemon.filter((poke) => {
              return poke.name.includes(event.target.value.toLowerCase());
            });
            this.setState(() => { 
              return { pokemon: filteredPokemon };
            });
          }}
        />
        {
          this.state.pokemon.map((poke) => {
            poke.name = poke.name[0].toUpperCase() + poke.name.slice(1);
            return <h3 key={poke.id}>{poke.name}</h3>;
          })
        }
      </div>
    );
  }
}

export default App;
