import { useRouter } from 'next/router';

import Link from 'next/link';

import style from '../components/styles/header.module.css';

const Header = props => {
  const { title } = props;
  const router = useRouter();
  const header = (
    <>
      <nav>
        <Link href="/"><a>HOME</a></Link>
      </nav>

      <h1 className={style.title}>{title}</h1>
      <span onClick={() => router.back()} className={style.button}> {`\< BACK`} </span>
    </>
  );
  return header;
};

export default Header;
