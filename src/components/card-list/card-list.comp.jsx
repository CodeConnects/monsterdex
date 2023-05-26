import { Component } from "react";

import './card-list.styles.scss';
import PokemonCard from "../pokemon-card/pokemon-card.comp";

class CardList extends Component {

  render() {
    const { pokemon } = this.props;
    
    return (
      <div className="card-list">
        {pokemon.map((poke) => {

          return (
            <PokemonCard poke={poke} key={poke.name} />
          )
        })}
      </div>
    );
  }
}

export default CardList;
