module.exports = {
  scripts: {
    default: 'ts-node src/index.ts',
    dev: 'nodemon -e ts,graphql -x ts-node src/index.ts',
    start: 'ts-node src/index.ts',

    test: {
      default: 'jest --detectOpenHandles --forceExit',
      watch: 'jest --watch'
    },

    prisma: {
      generate: 'prisma generate',
      deploy: 'prisma deploy',
      introspect: 'prisma introspect',
      info: 'prisma info',
      deploy: 'prisma deploy',
      seed: 'prisma seed'
    },

    prettier: 'prettier --write "./**/*.{js,ts,json,scss,css}"'
  }
}
