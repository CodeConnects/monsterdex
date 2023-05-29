import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.comp';
import SearchBox from './components/search-box/search-box.comp';
import './App.scss';

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [pokemon, setPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState(pokemon);

  const pokeAPI = 'https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0';
  useEffect(() => {
    fetch(pokeAPI)
      .then((response) => {
        return response.json();
      }).then((results) => {
        setPokemon(results.results);
      });
  }, []);

  useEffect(() => {
    const freshFilteredPokemon = pokemon.filter((poke) => {
      return poke.name.toLowerCase().includes(searchField.toLowerCase());
    });
    setFilteredPokemon(freshFilteredPokemon);
  }, [pokemon, searchField]);
  

  const onSearchChange = (event) => {
    const searchFieldValue = event.target.value.toLowerCase();
    setSearchField(searchFieldValue);
  }

  return (
    <div className="App">
      <h1>Pokedexer</h1>
      
      <SearchBox
        className='pokemon-search'
        type='search'
        placeholder='Search Pokemon'
        onChangeHandler={ onSearchChange }
      />

      <CardList pokemon={ filteredPokemon } />

    </div>
  );
}

export default App;
