import Link from 'next/link';

import style from './home.module.css';

const Home = () => {
  return (
    <>
      <h1 className={style.title}>The Rick and Morty Library</h1>

      <div className={style.grid}>
        <Link href='/list/characters'>
          <a className={style.button}>
            <h2>List of all Characters</h2>
          </a>
        </Link>

        <Link href='/list/locations'>
          <a className={style.button}>
            <h2>Characters from location</h2>
          </a>
        </Link>

        <Link href='/list/episodes'>
          <a className={style.button}>
            <h2>Characters from episode</h2>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Home;
