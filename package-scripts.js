const npsUtils = require('nps-utils')

module.exports = {
  scripts: {
    commit: {
      script: 'git-cz',
      description: 'Run commitizen'
    },
    prettier: {
      default: 'prettier --write "./**/*.{js,ts,json,scss,css}"',
      packages: 'lerna exec --concurrency 1 -- nps prettier',
      staged: 'precise-commits'
    },
    lerna: {
      script: 'lerna',
      description: 'Run lerna commands'
    },
    bootstrap: {
      default: {
        script: 'lerna bootstrap',
        description: 'Link together local packages and npm install remaining package dependencies'
      },
      production: 'lerna bootstrap --ci -- --production',
      ci: 'lerna bootstrap --ci'
    },
    clean: {
      default: 'nps clean.repo && nps bootstrap',
      repo: 'lerna clean --yes',
      production: 'nps clean.repo && nps bootstrap.production'
    },
    setup: {
      default: 'nps clean'
    },

    test: 'lerna exec --concurrency 1 -- nps test.ci',
    lint: 'lerna exec --concurrency 1 -- nps lint',

    server: npsUtils.includePackage({ path: `${__dirname}/packages/server/package-scripts.js` }),
    react: npsUtils.includePackage({ path: `${__dirname}/packages/react/package-scripts.js` }),

    build: {
      default: 'nps build.api && nps build.app && nps build.bootstrap',
      api: 'docker build -t jonnybgod/seed-api:latest -f ./packages/api/Dockerfile .',
      app: 'docker build -t jonnybgod/seed-app:latest -f ./packages/apps/Dockerfile ./packages/apps',
      backoffice:
        'docker build -t jonnybgod/seed-backoffice:latest -f ./packages/apps/Dockerfile.backoffice ./packages/apps'
    }
  }
}
