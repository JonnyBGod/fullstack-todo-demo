import gql from 'graphql-tag'

export const TodoLists = gql`
  query TodoLists {
    todoLists {
      id
      title
    }
  }
`

export const TodoList = gql`
  query TodoList($where: TodoListWhereUniqueInput!) {
    todoList(where: $where) {
      id
      title
      entries {
        id
        title
        done
      }
    }
  }
`
