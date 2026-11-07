/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  home: typeof routes['home']
  newAccount: {
    create: typeof routes['new_account.create']
    store: typeof routes['new_account.store']
  }
  session: {
    create: typeof routes['session.create']
    store: typeof routes['session.store']
    destroy: typeof routes['session.destroy']
  }
  spaces: {
    spaces: {
      store: typeof routes['spaces.spaces.store']
    }
  }
  dashboard: typeof routes['dashboard']
  apis: {
    users: {
      users: {
        checkEmail: typeof routes['apis.users.users.check_email']
        checkUsername: typeof routes['apis.users.users.check_username']
      }
    }
  }
}
