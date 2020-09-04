/* eslint-disable react/prop-types */
import '../styles/global.css';
import 'normalize.css';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}
