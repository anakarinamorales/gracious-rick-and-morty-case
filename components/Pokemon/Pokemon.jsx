import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import pokemonStyle from '../styles/card.module.css';

const Pokemon = (props) => {
  const { id } = props;
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((req) => req.json())
      .then(setData);
  }, [id]);

  if (!data) {
    return null;
  }

  return (
    <div className={pokemonStyle.card}>
      <p> If this character was a pokemon, it would be ... </p>
      <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} className={pokemonStyle.portrait} alt={data.name} />
      <span className={pokemonStyle.info}>{data.name}</span>
    </div>
  );
};

Pokemon.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Pokemon;
