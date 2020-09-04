import Head from 'next/head';
import Link from 'next/link';

import indexStyle from '../components/styles/index.module.css';

function Home() {
  return (
    <div className={`${indexStyle.container}`}>
      <Head>
        <title>Rick and Morty Library</title>
      </Head>

      <main>
        <h1 className={indexStyle.title}>The Rick and Morty Library</h1>

        <div className={indexStyle.grid}>
          <Link href="/list/characters">
            <a className={indexStyle.button}>
              <h2>List of all Characters</h2>
            </a>
          </Link>

          <Link href="/list/locations">
            <a className={indexStyle.button}>
              <h2>Characters from location</h2>
            </a>
          </Link>

          <Link href="/list/episodes">
            <a className={indexStyle.button}>
              <h2>Characters from episode</h2>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;
