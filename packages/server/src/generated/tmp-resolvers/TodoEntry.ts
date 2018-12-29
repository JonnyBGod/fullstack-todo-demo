// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { TodoEntryResolvers } from '../graphqlgen'

export const TodoEntry: TodoEntryResolvers.Type = {
  ...TodoEntryResolvers.defaultResolvers,

  list: (parent, args, ctx) => {
    throw new Error('Resolver not implemented')
  }
}
