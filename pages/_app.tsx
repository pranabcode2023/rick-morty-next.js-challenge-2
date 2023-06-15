import Layout from '../components/Layout'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache,ApolloProvider } from '@apollo/client'
import Episodes from './episodes';

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache()
  });
  return (
    <ApolloProvider client={client}>
     <Layout>
     <Component {...pageProps} />
     <h1>Episodes</h1>
     <Episodes/>
    </Layout>
    </ApolloProvider>
  )
 
}

export default MyApp


// import { NextPage } from 'next';
// import Layout from '../components/Layout'
// import '../styles/globals.css'
// import type { AppProps } from 'next/app'
// import { ReactElement, ReactNode } from 'react'

// type NextPageWithLayout = NextPage & {
//   getLayout?: (page: ReactElement) => ReactNode
// };

// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout 
// }

// function MyApp({ Component, pageProps }:  AppPropsWithLayout) {

//   const getLayout = Component.getLayout ?? ( (page) =>page);
//   return getLayout (<Component {...pageProps} /> );
 
// }

// export default MyApp