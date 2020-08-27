import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import withApollo from '../../components/withApollo';
import queries from '../../queries';
import characterStyle from '../../components/styles/characters.module.css';

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
      <h1 className={characterStyle.title}>{data.character.name}</h1>
      <div className={characterStyle.character}>
        <img src={data.character.image} alt={`${data.character.name} portrait`} className={characterStyle.portrait}/>
        <p>
          {data.character.status} -{data.character.species}
        </p>
        <p>{data.character.gender}</p>
        <p className={characterStyle.description}>
          <span className={characterStyle.label}>Last known location:</span>
          {data.character.location.name}
        </p>
        <p className={characterStyle.description}>
          <span className={characterStyle.label}>Dimension:</span>
          {data.character.location.dimension}
        </p>
      </div>

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

Characters.getInitialProps = async ctx => {
  const { query } = ctx;
  const { id } = query;

  return { id };
};

Characters.propTypes = {
  id: PropTypes.number.isRequired,
};

export default withApollo({ ssr: true })(Characters);
