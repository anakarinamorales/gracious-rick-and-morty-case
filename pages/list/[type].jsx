import PropTypes from 'prop-types';
import Link from 'next/link';

import withApollo from '../../utils/withApollo';
import queries from '../../utils/queries';

import QueryList from '../../components/QueryList/QueryList';
import Header from '../../components/Header/Header';

import listStyle from '../../components/List/list.module.css';

function List(props) {
  const { type } = props;
  const query = queries[`get_${type}`.toUpperCase()];

  return (
    <main className={listStyle.container}>
      <Header title={`${type} list`} />

      <QueryList query={query} type={type} container='div' className={listStyle.grid}>
        {(childData) => (
          <Link href={`/${type}/[id]`} as={`/${type}/${childData.id}`} key={childData.id}>
            <a className={listStyle.card}>{childData.name}</a>
          </Link>
        )}
      </QueryList>
    </main>
  );
}

List.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const { type } = query;

  return { type };
};

List.propTypes = {
  type: PropTypes.string.isRequired,
};

export default withApollo({ ssr: true })(List);
