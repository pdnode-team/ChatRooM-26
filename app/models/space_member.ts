import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { SpaceMemberSchema } from '#database/schema'
import Space from '#models/space'
import User from '#models/user'

export default class SpaceMember extends SpaceMemberSchema {
  declare role: 'OWNER' | 'ADMIN' | 'MEMBER'

  @belongsTo(() => Space)
  declare space: BelongsTo<typeof Space>

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}
