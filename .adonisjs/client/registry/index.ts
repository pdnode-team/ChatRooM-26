/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

export type { Route, Path } from './schema.d.ts'

const placeholder: any = {}

const routes = {
  'home': {
    methods: ["GET","HEAD"],
    pattern: '/',
    tokens: [[0,"/"]],
    types: placeholder as Registry['home']['types'],
  },
  'new_account.create': {
    methods: ["GET","HEAD"],
    pattern: '/signup',
    tokens: [[0,"signup"]],
    types: placeholder as Registry['new_account.create']['types'],
  },
  'new_account.store': {
    methods: ["POST"],
    pattern: '/signup',
    tokens: [[0,"signup"]],
    types: placeholder as Registry['new_account.store']['types'],
  },
  'session.create': {
    methods: ["GET","HEAD"],
    pattern: '/login',
    tokens: [[0,"login"]],
    types: placeholder as Registry['session.create']['types'],
  },
  'session.store': {
    methods: ["POST"],
    pattern: '/login',
    tokens: [[0,"login"]],
    types: placeholder as Registry['session.store']['types'],
  },
  'spaces.index': {
    methods: ["GET","HEAD"],
    pattern: '/spaces',
    tokens: [[0,"spaces"]],
    types: placeholder as Registry['spaces.index']['types'],
  },
  'spaces.store': {
    methods: ["POST"],
    pattern: '/spaces',
    tokens: [[0,"spaces"]],
    types: placeholder as Registry['spaces.store']['types'],
  },
  'spaces.show': {
    methods: ["GET","HEAD"],
    pattern: '/spaces/:id',
    tokens: [[0,"spaces"],[1,"id"]],
    types: placeholder as Registry['spaces.show']['types'],
  },
  'spaces.update': {
    methods: ["PUT","PATCH"],
    pattern: '/spaces/:id',
    tokens: [[0,"spaces"],[1,"id"]],
    types: placeholder as Registry['spaces.update']['types'],
  },
  'spaces.destroy': {
    methods: ["DELETE"],
    pattern: '/spaces/:id',
    tokens: [[0,"spaces"],[1,"id"]],
    types: placeholder as Registry['spaces.destroy']['types'],
  },
  'dashboard': {
    methods: ["GET","HEAD"],
    pattern: '/dashboard',
    tokens: [[0,"dashboard"]],
    types: placeholder as Registry['dashboard']['types'],
  },
  'session.destroy': {
    methods: ["POST"],
    pattern: '/logout',
    tokens: [[0,"logout"]],
    types: placeholder as Registry['session.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
