import LayoutNomal from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <LayoutNomal>
      <Component {...pageProps} />
    </LayoutNomal>
  );
}

export default MyApp;
