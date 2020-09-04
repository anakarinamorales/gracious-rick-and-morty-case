import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import withApollo from '../../utils/withApollo';
import queries from '../../utils/queries';

import Header from '../../components/Header/Header';
import Pokemon from '../../components/Pokemon/Pokemon';

import characterStyle from '../../components/styles/card.module.css';

function Characters(props) {
  const { id } = props;

  const { loading, error, data } = useQuery(queries.GET_CHARACTER_BY_ID, {
    notifyOnNetworkStatusChange: true,
    variables: { id },
  });

  if (loading) {
    return 'Loading';
  }

  if (error || !data) {
    return 'Error';
  }

  return (
    <main>
      <Header title={data.character.name} />

      <div className={characterStyle.card}>
        <img
          src={data.character.image}
          alt={`${data.character.name} portrait`}
          className={characterStyle.portrait}
        />
        <p>
          {data.character.status} -{data.character.species}
        </p>
        <p>{data.character.gender}</p>
        <p className={characterStyle.description}>
          <span className={characterStyle.label}>Last known location:</span>
          {data.character.location.name}
        </p>
        <p className={characterStyle.description}>
          <span className={characterStyle.label}>Dimension:</span>
          {data.character.location.dimension}
        </p>
      </div>

      <Pokemon id={data.character.id} />
    </main>
  );
}

Characters.getInitialProps = async ctx => {
  const { query } = ctx;
  const { id } = query;

  return { id };
};

Characters.propTypes = {
  id: PropTypes.string.isRequired,
};

export default withApollo({ ssr: true })(Characters);
