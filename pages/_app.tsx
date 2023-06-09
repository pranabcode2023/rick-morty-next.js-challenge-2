import Layout from '../components/Layout'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache,ApolloProvider } from '@apollo/client'


const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql",
  cache: new InMemoryCache()
});


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
     <Layout>
    <Component {...pageProps} />
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