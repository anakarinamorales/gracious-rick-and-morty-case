import { useRouter } from 'next/router';

import Link from 'next/link';

import style from './header.module.css';

const Header = (props) => {
  const { title } = props;
  const router = useRouter();

  const header = (
    <>
      <nav>
        <Link href='/'><a>HOME</a></Link>
      </nav>

      <h1 className={style.title}>{title}</h1>
      <button onClick={() => router.back()} className={style.button} type='button'>
        {'< BACK'}
      </button>
    </>
  );

  return header;
};

export default Header;
