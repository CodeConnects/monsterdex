import { useState } from 'react';

import './pokemon-card.styles.scss';

const PokemonCard = ({ poke }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const pokeID = poke.url.slice(34, -1);
  const properName = poke.name[0].toUpperCase() + poke.name.slice(1);
  const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeID}.png`;
  const shinyImgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokeID}.png`;
  
  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`pokemon-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className='pokemon-card-inner'>
        <div className='card-front'>
          <img 
            alt={`Pokemon ${properName}`}
            name={properName}
            src={imgSrc}
          />
          <h3>{properName} <span className="pokeID">(#{pokeID})</span></h3>
        </div>
        <div className='card-back'>
          <img 
            alt={`Shiny Pokemon ${properName}`}
            name={`Shiny ${properName}`}
            src={shinyImgSrc}
          />
          <h3>Shiny {properName} <span className="pokeID">(#{pokeID})</span></h3>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;