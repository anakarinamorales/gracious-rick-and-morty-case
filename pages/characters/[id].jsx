import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import withApollo from '../../components/withApollo';
import queries from '../../queries';

import Header from '../../components/Header';

import characterStyle from '../../components/styles/characters.module.css';

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
      <Header title={data.character.name}/>
      
      <div className={characterStyle.character}>
        <img src={data.character.image} alt={`${data.character.name} portrait`} className={characterStyle.portrait}/>
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

        <p> If this character was a pokemon, it would be (same id): </p>
      </div>
    </main>
  );
}

Characters.getInitialProps = async ctx => {
  const { query } = ctx;
  const { id } = query;

  return { id };
};

Characters.propTypes = {
  id: PropTypes.number.isRequired,
};

export default withApollo({ ssr: true })(Characters);
