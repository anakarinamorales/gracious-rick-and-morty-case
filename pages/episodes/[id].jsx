import PropTypes from 'prop-types';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import withApollo from '../../components/withApollo';
import queries from '../../queries';
import style from '../../components/styles/layout.module.css';
import List from '../../components/List';

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
    <main>
      <h1 className={style.title}>
        Episode:
        {data.episode.name}
      </h1>

      <List container="div" data={data.episode.characters}>
        {(childData) => (
          <Link href={`/characters/${childData.id}`}>
            <a>{childData.name}</a>
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
  id: PropTypes.number.isRequired,
};

export default withApollo({ ssr: true })(Episodes);
