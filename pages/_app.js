import '../styles/globals.css';
import '../styles/forms.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>hyperscale</title>
      </Head>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
