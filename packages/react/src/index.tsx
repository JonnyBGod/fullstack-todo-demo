import * as React from 'react'
import { render } from 'react-dom'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { withClientState } from 'apollo-link-state'
import { ApolloProvider } from 'react-apollo'

import { App } from './App'

const cache = new InMemoryCache()

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

const stateLink = withClientState({
  cache,
  resolvers: {},
  defaults: {
    selectedList: null
  }
})

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink, httpLink])
})

const WrappedApp = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

render(WrappedApp, document.getElementById('root'))
