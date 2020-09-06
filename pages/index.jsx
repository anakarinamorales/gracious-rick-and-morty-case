import Head from 'next/head';

import Home from '../components/Home/Home';

import style from '../components/Home/home.module.css';

function App() {
  return (
    <>
      <Head>
        <title>Rick and Morty Library</title>
      </Head>

      <main className={style.container}>
        <Home />
      </main>
    </>
  );
}

export default App;
