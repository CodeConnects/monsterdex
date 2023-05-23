import { Component } from "react";

import './card-list.styles.scss';

class CardList extends Component {

  render() {
    const { pokemon } = this.props;
    
    return (
      <div className="card-list">
        {pokemon.map((poke) => {
          const pokeID = poke.url.slice(34, -1);
          const properName = poke.name[0].toUpperCase() + poke.name.slice(1);

          return (
            <div className='card-wrap' key={pokeID}>
              <img 
                alt={`Pokemon ${properName}`}
                name={properName}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeID}.png`} 
              />
              <h3>{properName}</h3>
            </div>
          )
        })}
      </div>
    );
  }
}

export default CardList;
