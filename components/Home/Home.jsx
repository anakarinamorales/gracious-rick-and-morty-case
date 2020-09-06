import Link from 'next/link';

import style from './home.module.css';

const Home = () => (
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

      <section className={style.plumbus}>
        <h2 className={style['call-to-action']}>
          Want to know what a plumbus is made of? See the video!
        </h2>

        <iframe
          width='560'
          height='315'
          src='https://www.youtube-nocookie.com/embed/eMJk4y9NGvE'
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          className={style.video}
          title='Plumbus Video'
        />
      </section>
    </div>
  </>
);

export default Home;
