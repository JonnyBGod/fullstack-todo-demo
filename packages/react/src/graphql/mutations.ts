import gql from 'graphql-tag'

export const CreateTodoList = gql`
  mutation CreateTodoList($data: TodoListCreateInput!) {
    createTodoList(data: $data) {
      id
      title
    }
  }
`

export const CreateTodoEntry = gql`
  mutation CreateTodoEntry($data: TodoEntryCreateInput!) {
    createTodoEntry(data: $data) {
      id
      title
      done
    }
  }
`

export const UpdateTodoList = gql`
  mutation UpdateTodoList($where: TodoListWhereUniqueInput!, $data: TodoListUpdateInput!) {
    updateTodoList(where: $where, data: $data) {
      id
      title
    }
  }
`

export const UpdateTodoEntry = gql`
  mutation UpdateTodoEntry($where: TodoEntryWhereUniqueInput!, $data: TodoEntryUpdateInput!) {
    updateTodoEntry(where: $where, data: $data) {
      id
      title
      done
    }
  }
`

export const DeleteTodoList = gql`
  mutation DeleteTodoList($where: TodoListWhereUniqueInput!) {
    deleteTodoList(where: $where) {
      id
      title
    }
  }
`

export const DeleteTodoEntry = gql`
  mutation DeleteTodoEntry($where: TodoEntryWhereUniqueInput!) {
    deleteTodoEntry(where: $where) {
      id
      title
      done
    }
  }
`
