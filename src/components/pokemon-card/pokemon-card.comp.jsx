import './pokemon-card.styles.scss';

const PokemonCard = ({ poke }) => {
  const pokeID = poke.url.slice(34, -1);
  const properName = poke.name[0].toUpperCase() + poke.name.slice(1);
  const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeID}.png`;
  
  return (
    <div className='pokemon-card'>
        <div className='pokemon-card-inner'>
        <img 
          alt={`Pokemon ${properName}`}
          name={properName}
          src={imgSrc} 
        />
        <h3>{properName} <span className="pokeID">(#{pokeID})</span></h3>
      </div>
    </div>
  );
}

export default PokemonCard;