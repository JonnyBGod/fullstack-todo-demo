// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { TodoEntryConnectionResolvers } from '../graphqlgen'

export const TodoEntryConnection: TodoEntryConnectionResolvers.Type = {
  ...TodoEntryConnectionResolvers.defaultResolvers,

  aggregate: (parent, args, ctx) => {
    throw new Error('Resolver not implemented')
  }
}
