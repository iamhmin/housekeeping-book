import '../utils/App.css';
import CustomLayout from './views/common/components/CustomLayout';
import type { AppProps /*, AppContext */ } from 'next/app';
import { SessionProvider } from 'next-auth/react';

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <CustomLayout>
        <Component {...pageProps} />
      </CustomLayout>
    </SessionProvider>
  );
}

export default App;
