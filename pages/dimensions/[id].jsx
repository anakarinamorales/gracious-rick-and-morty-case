import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';
import withApollo from '../../utils/withApollo';
import queries from '../../utils/queries';

// components
import List from '../../components/List/List';
import Header from '../../components/Header/Header';

// styles
import listStyle from '../../components/List/list.module.css';

function Dimensions(props) {
  const { id } = props;

  const { loading, error, data } = useQuery(queries.GET_CHARACTERS_BY_DIMENSION, {
    notifyOnNetworkStatusChange: true,
    variables: { dimension: id },
  });

  if (loading) {
    return 'Loading';
  }

  if (error || !data) {
    return 'Error';
  }

  const characters = data.locations.results.reduce(
    (acc, location) => acc.concat(location.residents),
    [],
  );

  return (
    <main className={listStyle.container}>
      <Header title={`Characters at ${id}`} />

      <List container='div' data={characters} className={listStyle.grid}>
        {(childData) => (
          <Link href='/characters/[id]' as={`/characters/${childData.id}`}>
            <a className={listStyle.card}>{childData.name}</a>
          </Link>
        )}
      </List>
    </main>
  );
}

Dimensions.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const { id } = query;

  return { id };
};

Dimensions.propTypes = {
  id: PropTypes.string.isRequired,
};

export default withApollo({ ssr: true })(Dimensions);
