// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { TodoListResolvers } from '../graphqlgen'

export const TodoList: TodoListResolvers.Type = {
  ...TodoListResolvers.defaultResolvers,

  entries: (parent, args, ctx) => {
    throw new Error('Resolver not implemented')
  }
}
