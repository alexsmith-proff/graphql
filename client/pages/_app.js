
import { ApolloProvider } from '@apollo/client';
import client from '../util/apollo-client'

import '../styles/global.scss'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
    
  )
  
}