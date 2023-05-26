import { Component } from "react";

import './pokemon-card.styles.scss';

class PokemonCard extends Component {
  render() {
    const pokeID = this.props.poke.url.slice(34, -1);
    const properName = this.props.poke.name[0].toUpperCase() + this.props.poke.name.slice(1);
    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeID}.png`;
    
    return (
      <div className='pokemon-card'>
        <img 
          alt={`Pokemon ${properName}`}
          name={properName}
          src={imgSrc} 
        />
        <h3>{properName}</h3>
      </div>
    );
  }
}

export default PokemonCard;