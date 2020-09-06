import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Card from '../Card/Card';

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
    <Card cardImage={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} cardTitle={data.name} />
  );
};

Pokemon.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Pokemon;
