import './card-list.styles.scss';
import PokemonCard from "../pokemon-card/pokemon-card.comp";

const CardList = ({ pokemon }) => (
  <div className="card-list">
    {pokemon.map((poke) => {

      return (
        <PokemonCard poke={poke} key={poke.name} />
      )
    })}
  </div>
);

export default CardList;
