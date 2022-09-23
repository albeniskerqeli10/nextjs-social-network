import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import { useEffect, useState } from 'react';
import "@fontsource/inter";
import "@fontsource/manrope";
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import useStore from '../store/store';
import { useRouter } from 'next/router';
function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  const addUser = useStore(state => state.addUser);
  const router = useRouter();

  useEffect(() => {
    const userObj = JSON.parse(localStorage.getItem("userDetails"));
    if (userObj !== null) {
      addUser(userObj);
    }


  }, [])


  return (
    <QueryClientProvider client={queryClient}>

      <Hydrate state={pageProps.dehydratedState}>

        <Layout>

          <Component  {...pageProps} />
        </Layout >
      </Hydrate>

    </QueryClientProvider >

  )
}

export default MyApp
