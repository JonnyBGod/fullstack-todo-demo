import * as React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import CreateTodoList from './components/CreateTodoList'
import CreateTodoEntry from './components/CreateTodoEntry'
import TodoLists from './components/TodoLists'
import TodoList from './components/TodoList'

export const SelectedList = gql`
  {
    selectedList @client
  }
`

export const App = () => (
  <Query query={SelectedList}>
    {({ data }) => {
      let renderList = <div />
      if (data && data.selectedList) {
        renderList = (
          <div>
            <br />
            ---------------------------
            <br />
            <TodoList where={{ id: data && data.selectedList }} />
            <CreateTodoEntry listId={data && data.selectedList} />
          </div>
        )
      }

      return (
        <div>
          <CreateTodoList />
          <TodoLists />

          {renderList}
        </div>
      )
    }}
  </Query>
)
