import { MockedProvider } from 'react-apollo/test-utils'
import { mocks } from '../__mocks__/data'

import * as React from 'react'
import { mount } from 'enzyme'

import { CreateTodoList } from './CreateTodoList'

it('renders without crashing', () => {
  const wrapper = mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <CreateTodoList />
    </MockedProvider>
  )

  expect(wrapper.find('input').length).toEqual(1)
  expect(wrapper.find('button').length).toEqual(1)
})

it('create new list', () => {
  const wrapper = mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <CreateTodoList />
    </MockedProvider>
  )

  wrapper.find('input').simulate('change', { target: { value: 'createTodoListTitle' } })
  wrapper.find('button').simulate('click')
})
