import Link from 'next/link';
import { useRouter } from 'next/router';
import withApollo from '../components/withApollo';

import queries from '../queries';
import QueryList from '../components/QueryList';
import listStyle from '../components/styles/list.module.css';
import Header from '../components/Header';

function ListPage() {
  const router = useRouter();
  const { type } = router.query;
  const query = queries[`get_${type}`.toUpperCase()];

  return (
    <main className={listStyle.container}>
      <Header title={`${type} list`} />

      <QueryList query={query} type={type} container="div" className={listStyle.grid}>
        {(childData) => (
          <Link href={`${type}/[id]`} as={`${type}/${childData.id}`}>
            <a className={listStyle.card}>{childData.name}</a>
          </Link>
        )}
      </QueryList>
    </main>
  );
}

export default withApollo({ ssr: true })(ListPage);
