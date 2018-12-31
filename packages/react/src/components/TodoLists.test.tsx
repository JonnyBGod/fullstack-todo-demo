import { MockedProvider } from 'react-apollo/test-utils'
import { mocks } from '../__mocks__/data'

import * as React from 'react'
import { mount } from 'enzyme'

import { TodoLists } from './TodoLists'

const wait = (time = 0) => new Promise(res => setTimeout(res, time))

it('renders without crashing', async () => {
  const wrapper = mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <TodoLists />
    </MockedProvider>
  )

  await wait(0)
  wrapper.update()

  expect(wrapper.find('li').length).toEqual(1)
})

it('delete list', async () => {
  const wrapper = mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <TodoLists />
    </MockedProvider>
  )

  await wait(0)
  wrapper.update()

  wrapper.find('button').simulate('click')
})
