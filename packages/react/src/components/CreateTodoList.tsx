import * as React from 'react'
import { Mutation } from 'react-apollo'

import { TodoLists as ITodoLists } from '../__generated__/types'

import { TodoLists as QUERY } from '../graphql/queries'
import { CreateTodoList as MUTATION } from '../graphql/mutations'

let input: HTMLInputElement

export const CreateTodoList: React.SFC = props => {
  return (
    <Mutation
      mutation={MUTATION}
      update={(cache, { data: { createTodoList } }) => {
        const cachedData: ITodoLists | null = cache.readQuery({ query: QUERY })
        cache.writeQuery({
          query: QUERY,
          data: {
            todoLists: [...(cachedData ? cachedData.todoLists : []), createTodoList]
          }
        })
      }}
    >
      {(createTodoList, { data }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault()
              createTodoList({ variables: { data: { title: input.value } } })
              input.value = ''
            }}
          >
            <input
              ref={(node: HTMLInputElement) => {
                input = node
              }}
            />
            <button type="submit">Add Todo</button>
          </form>
        </div>
      )}
    </Mutation>
  )
}

export default CreateTodoList
