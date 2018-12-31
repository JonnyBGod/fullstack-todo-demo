import * as React from 'react'
import { ApolloConsumer, Query, Mutation } from 'react-apollo'

import { TodoLists as ITodoLists, TodoList_todoList } from '../__generated__/types'

import { TodoLists as QUERY } from '../graphql/queries'
import { DeleteTodoList } from '../graphql/mutations'

class TodoListsQuery extends Query<ITodoLists> {}

export const TodoLists: React.SFC = props => {
  return (
    <ApolloConsumer>
      {client => (
        <TodoListsQuery query={QUERY}>
          {({ loading, data, error }) => {
            if (loading) return <div>Loading</div>
            if (error) return <h1>ERROR</h1>
            if (!data) return <div>no data</div>

            const { todoLists } = data
            return (
              <ul>
                {todoLists &&
                  todoLists.map((entry: TodoList_todoList) => (
                    <li key={entry.id}>
                      <a href="#" onClick={() => client.writeData({ data: { selectedList: entry.id } })}>
                        {entry.title}

                        <Mutation
                          mutation={DeleteTodoList}
                          variables={{
                            where: {
                              id: entry.id
                            }
                          }}
                          update={(cache, { data: { deleteTodoList } }) => {
                            const cachedData: ITodoLists | null = cache.readQuery({ query: QUERY })
                            if (!cachedData) {
                              return
                            }
                            cache.writeQuery({
                              query: QUERY,
                              data: {
                                todoLists: cachedData.todoLists.filter(
                                  (item: TodoList_todoList) => item.id !== deleteTodoList.id
                                )
                              }
                            })
                          }}
                        >
                          {deleteTodoList => {
                            return (
                              <button
                                onClick={e => {
                                  e.preventDefault()
                                  deleteTodoList()
                                }}
                              >
                                X
                              </button>
                            )
                          }}
                        </Mutation>
                      </a>
                    </li>
                  ))}
              </ul>
            )
          }}
        </TodoListsQuery>
      )}
    </ApolloConsumer>
  )
}

export default TodoLists
