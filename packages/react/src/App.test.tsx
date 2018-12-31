import { MockedProvider } from 'react-apollo/test-utils'
import { mocks } from './__mocks__/data'

import * as React from 'react'
import { mount } from 'enzyme'
import { App } from './App'

it('renders without crashing', () => {
  mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  )
})
