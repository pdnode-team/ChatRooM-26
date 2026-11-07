import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async checkEmail({ request, response }: HttpContext) {
    const email = request.input('email')?.trim()
    if (!email) {
      return response.badRequest({
        exists: false,
        message: 'Email is required',
      })
    }

    const user = await User.query().where('email', email.toLowerCase()).first()

    return response.ok({
      exists: Boolean(user),
    })
  }
}
