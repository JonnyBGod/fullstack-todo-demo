import * as React from 'react'
import { render } from 'react-dom'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'

import { App } from './App'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink
})

const WrappedApp = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

render(WrappedApp, document.getElementById('root'))
