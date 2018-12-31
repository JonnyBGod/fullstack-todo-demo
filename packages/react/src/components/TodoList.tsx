import * as React from 'react'
import { Query, Mutation } from 'react-apollo'

import { TodoList as ITodoList, TodoListVariables, TodoList_todoList_entries } from '../__generated__/types'

import { TodoList as QUERY } from '../graphql/queries'
import { UpdateTodoEntry, DeleteTodoEntry } from '../graphql/mutations'

class TodoListQuery extends Query<ITodoList, TodoListVariables> {
  todoListId: string
}

export const TodoList: React.SFC<TodoListVariables> = props => {
  const { where } = props

  return (
    <TodoListQuery query={QUERY} variables={{ where }}>
      {({ loading, data, error }) => {
        if (loading) return <div>Loading</div>
        if (error) return <h1>ERROR</h1>
        if (!data) return <div>no data</div>

        const { todoList } = data
        return (
          <div>
            <h4>{todoList && todoList.title}</h4>

            <ul>
              {todoList &&
                todoList.entries &&
                todoList.entries.map((entry, index) => {
                  return (
                    <li key={entry.id}>
                      <Mutation
                        mutation={UpdateTodoEntry}
                        update={(cache, { data: { updateTodoEntry } }) => {
                          const cachedData: ITodoList | null = cache.readQuery({ query: QUERY, variables: { where } })
                          if (!cachedData || !cachedData.todoList || !cachedData.todoList.entries) {
                            return
                          }
                          cache.writeQuery({
                            query: QUERY,
                            variables: {
                              where
                            },
                            data: {
                              todoList: {
                                ...cachedData.todoList,
                                entries: cachedData.todoList.entries.map((item: TodoList_todoList_entries) =>
                                  item.id !== updateTodoEntry.id ? item : updateTodoEntry
                                )
                              }
                            }
                          })
                        }}
                      >
                        {updateTodoEntry => {
                          return (
                            <label>
                              <input
                                type="checkbox"
                                onChange={e => {
                                  updateTodoEntry({
                                    variables: {
                                      where: {
                                        id: entry.id
                                      },
                                      data: {
                                        done: !entry.done
                                      }
                                    }
                                  })
                                }}
                                defaultChecked={entry.done}
                              />

                              {entry.title}
                            </label>
                          )
                        }}
                      </Mutation>
                      <Mutation
                        mutation={DeleteTodoEntry}
                        variables={{
                          where: {
                            id: entry.id
                          }
                        }}
                        update={(cache, { data: { deleteTodoEntry } }) => {
                          const cachedData: ITodoList | null = cache.readQuery({ query: QUERY, variables: { where } })
                          if (!cachedData || !cachedData.todoList || !cachedData.todoList.entries) {
                            return
                          }
                          cache.writeQuery({
                            query: QUERY,
                            variables: {
                              where
                            },
                            data: {
                              todoList: {
                                ...cachedData.todoList,
                                entries: cachedData.todoList.entries.filter(
                                  (item: TodoList_todoList_entries) => item.id !== deleteTodoEntry.id
                                )
                              }
                            }
                          })
                        }}
                      >
                        {deleteTodoEntry => {
                          return (
                            <button
                              onClick={e => {
                                deleteTodoEntry()
                              }}
                            >
                              X
                            </button>
                          )
                        }}
                      </Mutation>
                    </li>
                  )
                })}
            </ul>
          </div>
        )
      }}
    </TodoListQuery>
  )
}

export default TodoList
