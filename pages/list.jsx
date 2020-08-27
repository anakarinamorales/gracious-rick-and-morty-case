import Link from 'next/link';
import { useRouter } from 'next/router';
import withApollo from '../components/withApollo';

import queries from '../queries';
import QueryList from '../components/QueryList';
import style from '../components/styles/layout.module.css';

function ListPage() {
  const router = useRouter();
  const { type } = router.query;
  const query = queries[`get_${type}`.toUpperCase()];

  return (
    <main>
      <h1 className={style.title}>
        {type}
        {' '}
        list
      </h1>
      <QueryList query={query} type={type} container="div">
        {(childData) => (
          <Link href={`${type}/${childData.id}`}>
            <a>{childData.name}</a>
          </Link>
        )}
      </QueryList>
    </main>
  );
}

export default withApollo({ ssr: true })(ListPage);
