import { TodoLists, TodoList } from '../graphql/queries'
import { CreateTodoEntry, CreateTodoList } from '../graphql/mutations'
import { UpdateTodoEntry } from '../graphql/mutations'
import { DeleteTodoEntry, DeleteTodoList } from '../graphql/mutations'

import gql from 'graphql-tag'

export const SelectedList = gql`
  {
    selectedList @client
  }
`

export const mocks = [
  {
    request: {
      query: SelectedList
    },
    result: {
      data: {
        selectedList: 'cjq8m04kqn0hh09915g1m39gs'
      }
    }
  },
  {
    request: {
      query: TodoLists
    },
    result: {
      data: {
        todoLists: [
          {
            id: 'cjq8m04kqn0hh09915g1m39gs',
            title: 'Christmas gifts',
            __typename: 'TodoList'
          }
        ]
      }
    }
  },
  {
    request: {
      query: TodoList,
      variables: {
        where: {
          id: 'cjq8m04kqn0hh09915g1m39gs'
        }
      }
    },
    result: {
      data: {
        todoList: {
          id: 'cjq8m04kqn0hh09915g1m39gs',
          title: 'Christmas gifts',
          entries: [
            {
              id: 'cjq8m04kxn0hi0991j3nyreeq',
              title: 'Father',
              done: true,
              __typename: 'TodoEntry'
            },
            {
              id: 'cjq8m04l2n0hk0991io48ro74',
              title: 'Mother',
              done: false,
              __typename: 'TodoEntry'
            },
            {
              id: 'cjq8m04l6n0hm0991kp1fn0dz',
              title: 'Sister',
              done: false,
              __typename: 'TodoEntry'
            }
          ],
          __typename: 'TodoList'
        }
      }
    }
  },
  {
    request: {
      query: CreateTodoEntry,
      variables: {
        data: {
          title: 'createTodoEntryTitle',
          list: {
            connect: {
              id: 'cjq8m04kqn0hh09915g1m39gs'
            }
          }
        }
      }
    },
    result: {
      data: {
        createTodoEntry: {
          id: 'createTodoEntryID',
          title: 'createTodoEntryTitle',
          done: false,
          __typename: 'TodoEntry'
        }
      }
    }
  },
  {
    request: {
      query: CreateTodoList,
      variables: {
        data: {
          title: 'createTodoListTitle'
        }
      }
    },
    result: {
      data: {
        createTodoList: {
          id: 'createTodoListID',
          title: 'createTodoListTitle',
          entries: [],
          __typename: 'TodoList'
        }
      }
    }
  },
  {
    request: {
      query: UpdateTodoEntry,
      variables: {
        where: {
          id: 'cjq8m04kxn0hi0991j3nyreeq'
        },
        data: {
          done: false
        }
      }
    },
    result: {
      data: {
        updateTodoEntry: {
          id: 'cjq8m04kxn0hi0991j3nyreeq',
          title: 'Father',
          done: false,
          __typename: 'TodoEntry'
        }
      }
    }
  },
  {
    request: {
      query: DeleteTodoEntry,
      variables: {
        where: {
          id: 'cjq8m04kxn0hi0991j3nyreeq'
        }
      }
    },
    result: {
      data: {
        deleteTodoEntry: {
          id: 'cjq8m04kxn0hi0991j3nyreeq',
          title: 'Father',
          done: true,
          __typename: 'TodoEntry'
        }
      }
    }
  },
  {
    request: {
      query: DeleteTodoList,
      variables: {
        where: {
          id: 'cjq8m04kqn0hh09915g1m39gs'
        }
      }
    },
    result: {
      data: {
        deleteTodoList: {
          id: 'cjq8m04kqn0hh09915g1m39gs',
          title: 'Christmas gifts',
          __typename: 'TodoList'
        }
      }
    }
  }
]
