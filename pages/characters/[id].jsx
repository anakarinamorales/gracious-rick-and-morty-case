import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import withApollo from '../../components/withApollo';
import queries from '../../queries';
import style from '../../components/styles/layout.module.css';

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
      <h1 className={style.title}>{data.character.name}</h1>
      <img src={data.character.image} alt={`${data.character.name} portrait`} />
      <p>
        {data.character.status}
        {' '}
        -
        {data.character.species}
      </p>
      <p>{data.character.gender}</p>
      <p>
        Last known location:
        {data.character.location.name}
      </p>
      <p>
        Dimension:
        {data.character.location.dimension}
      </p>
    </main>
  );
}

Characters.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const { id } = query;

  return { id };
};

Characters.propTypes = {
  id: PropTypes.number.isRequired,
};

export default withApollo({ ssr: true })(Characters);
