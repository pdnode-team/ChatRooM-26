import type { HttpContext } from '@adonisjs/core/http'
import { createSpaceValidator } from '#validators/space'
import Space from '#models/space'

export default class SpacesController {
  /**
   * Display a list of resource
   */
  async index({ auth }: HttpContext) {
    const user = auth.getUserOrFail()

    const spaces = await user
      .related('spaces')
      .query()
      .orderBy('space_members.last_read_at', 'desc')

    return spaces
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, auth, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const payload = await request.validateUsing(createSpaceValidator)

    const space = await Space.create(payload)

    await space.related('members').attach({
      [user.id]: { role: 'OWNER' },
    })

    return response.created({
      data: space,
    })
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
