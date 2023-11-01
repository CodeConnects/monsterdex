import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.comp';
import './App.scss';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [limit, setLimit] = useState(20); // this is the number of pokemon to retrieve
  const [offset, setOffset] = useState(0); // this will be used for pagination
  const [totalPokemon, setTotalPokemon] = useState(0);

  useEffect(() => {
    async function fetchData() {
      // Call the API with the desired limit and offset
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
      const data = await response.json();

      setPokemonList(data.results);
      setTotalPokemon(data.count); // total number of pokemon available from the API
    }

    fetchData();
  }, [limit, offset]);

  const handleLimitChange = (e) => {
    setLimit(Number(e.target.value)); // Convert limit to number
    setOffset(0); // Reset offset when changing limit
  };
  
  const goToNextPage = () => {
    setOffset(prevOffset => Number(prevOffset) + Number(limit)); // Ensure both are numbers
  };
  
  const goToPreviousPage = () => {
    setOffset(prevOffset => Number(prevOffset) - Number(limit)); // Ensure both are numbers
  };

  return (
    <div className="App">
      <h1>Pokedexer</h1>

      <div>
        <p>Showing {offset + 1} - {Math.min(offset + Number(limit), totalPokemon)} of {totalPokemon} Pokemon</p>
        <div>
          <span>Per Page:</span>
          <select value={limit} onChange={handleLimitChange}>
            <option value={20}>20</option>
            <option value={40}>40</option>
            <option value={60}>60</option>
            <option value={80}>80</option>
          </select>
        </div>

        <div>
          <button onClick={goToPreviousPage} disabled={offset === 0}>Previous</button>
          <button onClick={goToNextPage} disabled={(offset + limit) >= totalPokemon}>Next</button>
        </div>
      </div>

      <CardList pokemon={ pokemonList } />

    </div>
  );
}

export default App;
