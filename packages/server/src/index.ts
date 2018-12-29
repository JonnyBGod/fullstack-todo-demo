import { GraphQLServer } from 'graphql-yoga'
import { Prisma, forwardTo } from 'prisma-binding'

const queryResolvers = {
  todoEntry: forwardTo('prisma'),
  todoEntries: forwardTo('prisma'),
  todoList: forwardTo('prisma'),
  todoLists: forwardTo('prisma')
}

const mutationResolvers = {
  upsertTodoEntry: forwardTo('prisma'),
  deleteTodoEntry: forwardTo('prisma'),
  upsertTodoList: forwardTo('prisma'),
  deleteTodoList: forwardTo('prisma')
}

const resolvers = {
  Query: queryResolvers,
  Mutation: mutationResolvers
}

const server = new GraphQLServer({
  typeDefs: './src/generated/graphql-schema/prisma.graphql',
  resolvers: resolvers as any,
  context: {
    prisma: new Prisma({
      typeDefs: './src/generated/graphql-schema/prisma.graphql',
      endpoint: 'https://us1.prisma.sh/joao-ribeiro-1d5b77/react-todo-test/dev'
    })
  }
})
server.start(() => console.log('Server is running on http://localhost:4000'))
