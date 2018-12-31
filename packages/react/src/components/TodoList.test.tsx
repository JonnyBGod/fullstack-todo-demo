import { MockedProvider } from 'react-apollo/test-utils'
import { mocks } from '../__mocks__/data'

import * as React from 'react'
import { mount } from 'enzyme'

import { TodoList } from './TodoList'

const wait = (time = 0) => new Promise(res => setTimeout(res, time))

it('renders without crashing', async () => {
  const wrapper = mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <TodoList where={{ id: 'cjq8m04kqn0hh09915g1m39gs' }} />
    </MockedProvider>
  )

  await wait(0)
  wrapper.update()

  expect(wrapper.find('li').length).toEqual(3)
})

it('update list entry', async () => {
  const wrapper = mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <TodoList where={{ id: 'cjq8m04kqn0hh09915g1m39gs' }} />
    </MockedProvider>
  )

  await wait(0)
  wrapper.update()

  wrapper
    .find('input')
    .at(0)
    .simulate('click')
})

it('delete list entry', async () => {
  const wrapper = mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <TodoList where={{ id: 'cjq8m04kqn0hh09915g1m39gs' }} />
    </MockedProvider>
  )

  await wait(0)
  wrapper.update()

  wrapper
    .find('button')
    .at(0)
    .simulate('click')
})
