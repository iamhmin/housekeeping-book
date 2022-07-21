import './App.css';
import CustomLayout from './views/common/components/CustomLayout';
import type { AppProps /*, AppContext */ } from 'next/app';

function App({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
    <CustomLayout>
      <Component {...pageProps} />
    </CustomLayout>
  );
}

export default App;
