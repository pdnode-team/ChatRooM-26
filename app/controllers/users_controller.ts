import User from '#models/user'
import { checkEmailValidator, checkUsernameValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async checkEmail({ request, response }: HttpContext) {
    const { email } = await request.validateUsing(checkEmailValidator)

    const user = await User.query().where('email', email.toLowerCase()).first()

    return response.ok({
      exists: Boolean(user),
    })
  }

  async checkUsername({ request, response }: HttpContext) {
    const { username } = await request.validateUsing(checkUsernameValidator)

    const user = await User.query().where('username', username.toLowerCase()).first()

    return response.ok({
      exists: Boolean(user),
    })
  }
}
