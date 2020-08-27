import Head from 'next/head';
import Link from 'next/link';
import indexStyle from '../components/styles/index.module.css';

function Home() {
  return (
    <div className={`${indexStyle.container}`}>
      <Head>
        <title>Rick and Morty Library</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className={indexStyle.title}>The Rick and Morty Library</h1>

        <div className={indexStyle.grid}>
          <Link href='/list?type=characters'>
            <a href='/' className={indexStyle.button}>
              <h2>Characters</h2>
            </a>
          </Link>

          <Link href='/list?type=locations'>
            <a href='/' className={indexStyle.button}>
              <h2>Characters from location</h2>
            </a>
          </Link>

          <Link href='/list?type=episodes'>
            <a href='/' className={indexStyle.button}>
              <h2>Characters from episode</h2>
            </a>
          </Link>
        </div>
      </main>
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
    </div>
  );
}

export default Home;
