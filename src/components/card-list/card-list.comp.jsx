import { Component } from "react";

import './card-list.styles.scss';

class CardList extends Component {

  render() {
    const { pokemon } = this.props;
    return (
      <div>
        {
          pokemon.map((poke) => {
            poke.name = poke.name[0].toUpperCase() + poke.name.slice(1);
            return <h3 key={poke.id}>{poke.name}</h3>;
          })
        }
      </div>
    );
  }
}

export default CardList;
