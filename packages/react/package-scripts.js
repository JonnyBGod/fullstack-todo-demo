module.exports = {
  scripts: {
    default: 'react-scripts-ts start',
    dev: 'react-scripts-ts start',
    start: 'serve .',
    build: 'react-scripts-ts build',
    test: 'react-scripts-ts test --env=jsdom',
    eject: 'react-scripts-ts eject',

    schema:
      'apollo-codegen introspect-schema ../server/src/generated/graphql-schema/prisma.graphql --output ./src/schema.json',
    types:
      'apollo-codegen generate ./src/graphql/*.ts --addTypename --schema ./src/schema.json --target typescript --output ./src/__generated__/types.ts',

    prettier: 'prettier --write "./**/*.{js,ts,json,scss,css}"'
  }
}
