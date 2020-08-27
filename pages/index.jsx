import Head from 'next/head';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import withApollo from '../components/withApollo';

import styles from './../components/styles/layout.module.css';

import ListCharactersFrom from '../components/listCharactersFrom';

const GET_CHARACTERS = gql`
  query character {
    characters {
      results {
        id
        name
        status
        species
        gender
        image
        location {
          id
          name
          dimension
        }
      }
    }
  }
`;

const GET_LOCATIONS = gql`
  query locations {
    locations {
      results {
        id
        name
        dimension
      }
    }
  }
`;

const GET_EPISODES = gql`
  query episodes {
    episodes {
      results {
        name
        characters {
          name
        }
      }
    }
  }
`;

function Home() {
  const { loading: characterLoading, error: characterError, data: allCharacters } = useQuery(
    GET_CHARACTERS,
    {
      notifyOnNetworkStatusChange: true,
    },
  );

  const { loading: locationsLoading, error: locationsError, data: allLocations } = useQuery(
    GET_LOCATIONS,
    {
      notifyOnNetworkStatusChange: true,
    },
  );

  const { loading: episodesLoading, error: episodesError, data: allEpisodes } = useQuery(
    GET_EPISODES,
    {
      notifyOnNetworkStatusChange: true,
    },
  );

  if (characterLoading || locationsLoading || episodesLoading) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Gracious Developer Case</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className={styles.title}>Rick and Morty Character Library</h1>

        <h1 className={styles.title}>Characters by location</h1>

        <div className={styles.grid}>
          {allLocations.locations.results.map((location) => (
            <Link href='' key={location.id}>
              <a href='' className={styles.locationCard}>
                <h2>{location.name}</h2>
                <ListCharactersFrom
                  selectionType='location'
                  chars={allCharacters.characters.results}
                  locationId={location.id}
                />
              </a>
            </Link>
          ))}
        </div>

        <h1 className={styles.title}>Characters by dimension</h1>

        <div className={styles.grid}>
          {allLocations.locations.results.map((location) => (
            <Link href='' key={location.id}>
              <a href='' className={styles.locationCard}>
                <h2>{location.dimension}</h2>
                <ListCharactersFrom
                  selectionType='dimension'
                  chars={allCharacters.characters.results}
                  dimension={location.dimension}
                />
              </a>
            </Link>
          ))}
        </div>

        <h1 className={styles.title}>All characters</h1>

        <div className={styles.grid}>
          {allCharacters.characters.results.map((character) => (
            <Link href='' key={character.id}>
              <a href='' className={styles.card}>
                <img src={character.image} />
                <h3>{character.name}</h3>
                <p>
                  {character.status} - {character.species}
                </p>
                <p>{character.gender}</p>
                <p>Last known location: {character.location.name}</p>
                <p>Dimension: {character.location.dimension}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>

      <footer>
        <a href='' target='_blank' rel=''>
          Social media: <img src='/vercel.svg' alt='Vercel Logo' className='logo' />
        </a>
      </footer>

      {/* <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          display: block;
          font-size: 20px;
          color: purple;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
            Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 1920px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 10%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .locationCard {
          flex-basis: 20%;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style> */}

      {/* <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style> */}
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  return {};
};

export default withApollo({ ssr: true })(Home);
