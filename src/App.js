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

      <div className='pagination-wrap'>
        <div className='pagination-item slide-up'>Showing {offset + 1} - {Math.min(offset + Number(limit), totalPokemon)} of {totalPokemon} Pokemon</div>
        
        <div className='pagination-item'>
          <select value={limit} onChange={handleLimitChange}>
            <option value={20}>20</option>
            <option value={40}>40</option>
            <option value={60}>60</option>
            <option value={80}>80</option>
          </select>
          <span className='slide-up'>Per Page</span>
        </div>

        <div className='pagination-item'>
          <button onClick={goToPreviousPage} disabled={offset === 0}>Previous</button>
          <button onClick={goToNextPage} disabled={(offset + limit) >= totalPokemon}>Next</button>
        </div>
      </div>

      <h1 className="main-title">Pokedexer</h1>

      <CardList pokemon={ pokemonList } />

    </div>
  );
}

export default App;
