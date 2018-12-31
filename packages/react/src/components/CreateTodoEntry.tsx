import * as React from 'react'
import { Mutation } from 'react-apollo'

import { TodoList as ITodoList } from '../__generated__/types'

import { TodoList as QUERY } from '../graphql/queries'
import { CreateTodoEntry as MUTATION } from '../graphql/mutations'

let input: HTMLInputElement

export const CreateTodoEntry: React.SFC<{ listId: string }> = props => {
  const { listId } = props

  return (
    <Mutation
      mutation={MUTATION}
      update={(cache, { data: { createTodoEntry } }) => {
        const cachedData: ITodoList | null = cache.readQuery({ query: QUERY, variables: { where: { id: listId } } })
        if (!cachedData || !cachedData.todoList || !cachedData.todoList.entries) {
          return
        }
        cache.writeQuery({
          query: QUERY,
          variables: {
            where: { id: listId }
          },
          data: {
            todoList: {
              ...cachedData.todoList,
              entries: [...cachedData.todoList.entries, createTodoEntry]
            }
          }
        })
      }}
    >
      {(createTodoEntry, { data }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault()
              createTodoEntry({ variables: { data: { title: input.value, list: { connect: { id: listId } } } } })
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

export default CreateTodoEntry
