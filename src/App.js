import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemon: [],
      searchField: '',
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

    const filteredPokemon = this.state.pokemon.filter((poke) => {
      return poke.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className="App">
        <h1>Pokedexer</h1>
        <input className='search-box' type='search' placeholder='Search Pokemon' 
          onChange={(event) => {
            
            const searchField = event.target.value.toLowerCase();

            this.setState(() => { 
              return { searchField };
            });
          }}
        />
        {
          filteredPokemon.map((poke) => {
            poke.name = poke.name[0].toUpperCase() + poke.name.slice(1);
            return <h3 key={poke.id}>{poke.name}</h3>;
          })
        }
      </div>
    );
  }
}

export default App;
