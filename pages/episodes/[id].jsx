import PropTypes from 'prop-types';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';

import withApollo from '../../utils/withApollo';
import queries from '../../utils/queries';
import listStyle from '../../components/List/list.module.css';
import List from '../../components/List/List';
import Header from '../../components/Header/Header';

function Episodes(props) {
  const { id } = props;

  const { loading, error, data } = useQuery(queries.GET_EPISODE_BY_ID, {
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
    <main className={listStyle.container}>
      <Header title={`Episode: "${data.episode.name}"`} />

      <List container='div' data={data.episode.characters} className={listStyle.grid}>
        {(childData) => (
          <Link href='/characters/[id]' as={`/characters/${childData.id}`}>
            <a className={listStyle.card}>{childData.name}</a>
          </Link>
        )}
      </List>
    </main>
  );
}

Episodes.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const { id } = query;

  return { id };
};

Episodes.propTypes = {
  id: PropTypes.string.isRequired,
};

export default withApollo({ ssr: true })(Episodes);
