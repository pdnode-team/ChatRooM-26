import type { HttpContext } from '@adonisjs/core/http'
import Space from '#models/space'
import { createSpaceValidator } from '#validators/space'

export default class SpacesController {
  async store({ request, auth, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const payload = await request.validateUsing(createSpaceValidator)

    const space = await Space.create(payload)

    await space.related('members').attach({
      [user.id]: { role: 'OWNER' },
    })

    return response.redirect().toRoute('dashboard')
  }
}
