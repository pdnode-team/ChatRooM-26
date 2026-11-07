/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'

router.on('/').renderInertia('home', {}).as('home')

router
  .group(() => {
    router.get('signup', [controllers.NewAccount, 'create'])
    router.post('signup', [controllers.NewAccount, 'store'])

    router.get('login', [controllers.Session, 'create'])
    router.post('login', [controllers.Session, 'store'])
  })
  .use(middleware.guest())

router
  .group(() => {
    router
      .group(() => {
        router.post('', [controllers.Spaces, 'store'])
      })
      .prefix('spaces')
      .as('spaces')

    router.get('dashboard', [controllers.Dashboard, 'index']).as('dashboard')
    router.post('logout', [controllers.Session, 'destroy'])
  })
  .use(middleware.auth())

router
  .group(() => {
    router
      .group(() => {
        router.get('/check-email', [controllers.Users, 'checkEmail'])
        router.get('/check-username', [controllers.Users, 'checkUsername'])
      })
      .prefix('users')
      .as('users')
  })
  .prefix('api')
  .as('apis')
