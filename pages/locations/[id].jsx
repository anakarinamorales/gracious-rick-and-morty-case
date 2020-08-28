import PropTypes from 'prop-types';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import withApollo from '../../components/withApollo';
import queries from '../../queries';

import List from '../../components/List';
import Header from '../../components/Header';

import listStyle from '../../components/styles/list.module.css';

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
      <Header title={data.location.name} />

      <span className={listStyle["dymension-warn"]}>
        {data.location.name} is located at dimension {data.location.dimension}. Click
        <Link href='/dimensions/[id]' as={`/dimensions/${data.location.dimension}`}>
          <a>{` here `}</a>
        </Link>
        to see all characters at this dimension.
      </span>

      <List container='div' data={data.location.residents} className={listStyle.grid}>
        {childData => (
          <Link href='/characters/[id]' as={`/characters/${childData.id}`}>
            <a className={listStyle.card}>{childData.name}</a>
          </Link>
        )}
      </List>
    </main>
  );
}

Locations.getInitialProps = async ctx => {
  const { query } = ctx;
  const { id } = query;

  return { id };
};

Locations.propTypes = {
  id: PropTypes.string.isRequired,
};

export default withApollo({ ssr: true })(Locations);
