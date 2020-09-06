import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import withApollo from '../../utils/withApollo';
import queries from '../../utils/queries';

import Header from '../../components/Header/Header';
import Pokemon from '../../components/Pokemon/Pokemon';
import Card from '../../components/Card/Card';

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

      <Card cardImage={data.character.image} cardTitle={data.character.name}>
        <p>
          Status:
          {data.character.status ? data.character.status : '-'}
        </p>

        <p>
          Gender:
          {data.character.gender ? data.character.gender : '-'}
        </p>

        <p>
          Location:
          {data.character.location.name ? data.character.location.name : '-'}
        </p>

        <p>
          Dimension:
          {data.character.location.dimension ? data.character.location.dimension : '-'}
        </p>
      </Card>

      <Pokemon id={data.character.id} />
    </main>
  );
}

Characters.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const { id } = query;

  return { id };
};

Characters.propTypes = {
  id: PropTypes.string.isRequired,
};

export default withApollo({ ssr: true })(Characters);
