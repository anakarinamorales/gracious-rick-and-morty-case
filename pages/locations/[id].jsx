import PropTypes from 'prop-types';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import withApollo from '../../components/withApollo';
import queries from '../../queries';
import listStyle from '../../components/styles/list.module.css';
import List from '../../components/List';

function Locations(props) {
  const { id } = props;

  const { loading, error, data } = useQuery(queries.GET_LOCATION_BY_ID, {
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
      <h1 className={listStyle.title}>
        Location:
        {data.location.name}
      </h1>

      <List container="div" data={data.location.residents} className={listStyle.grid}>
        {(childData) => (
          <Link href={`/characters/${childData.id}`}>
            <a className={listStyle.card}>{childData.name}</a>
          </Link>
        )}
      </List>
    </main>
  );
}

Locations.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const { id } = query;

  return { id };
};

Locations.propTypes = {
  id: PropTypes.number.isRequired,
};

export default withApollo({ ssr: true })(Locations);
