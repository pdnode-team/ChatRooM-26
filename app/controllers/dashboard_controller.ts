import type { HttpContext } from '@adonisjs/core/http'

export default class DashboardController {
  async index({ auth, inertia }: HttpContext) {
    const user = auth.getUserOrFail()

    const spaces = await user
      .related('spaces')
      .query()
      .orderBy('space_members.last_read_at', 'desc')

    return inertia.render('chat', {
      spaces,
    })
  }
}
