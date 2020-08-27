import Link from 'next/link';
import { useRouter } from 'next/router';
import withApollo from '../components/withApollo';

import queries from '../queries';
import QueryList from '../components/QueryList';
import listStyle from '../components/styles/list.module.css';

function ListPage() {
  const router = useRouter();
  const { type } = router.query;
  const query = queries[`get_${type}`.toUpperCase()];

  return (
    <main className={listStyle.container}>
      <h1 className={listStyle.title}>
        {type}
        {' '}
        list
      </h1>
      <QueryList query={query} type={type} container="div" className={listStyle.grid}>
        {(childData) => (
          <Link href={`${type}/${childData.id}`}>
            <a className={listStyle.card}>{childData.name}</a>
          </Link>
        )}
      </QueryList>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          line-height: 1.6;
          font-size: 18px;
        }

        * {
          box-sizing: border-box;
        }

        a {
          color: #0070f3;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        img {
          max-width: 100%;
          display: block;
        }
      `}</style>
    </main>
  );
}

export default withApollo({ ssr: true })(ListPage);
