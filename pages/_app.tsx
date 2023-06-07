import Layout from '../components/Layout'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
     <Layout>
    <Component {...pageProps} />
    </Layout>
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