import { MockedProvider } from 'react-apollo/test-utils'
import { mocks } from '../__mocks__/data'

import * as React from 'react'
import { mount } from 'enzyme'

import { CreateTodoEntry } from './CreateTodoEntry'

it('renders without crashing', () => {
  const wrapper = mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <CreateTodoEntry listId={'cjq8m04kqn0hh09915g1m39gs'} />
    </MockedProvider>
  )

  expect(wrapper.find('input').length).toEqual(1)
  expect(wrapper.find('button').length).toEqual(1)
})

it('create new list entry', async () => {
  const wrapper = mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <CreateTodoEntry listId={'cjq8m04kqn0hh09915g1m39gs'} />
    </MockedProvider>
  )

  wrapper.find('input').simulate('change', { target: { value: 'createTodoEntryTitle' } })
  wrapper.find('button').simulate('click')
})
