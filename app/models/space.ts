import { SpaceSchema } from '#database/schema'
import User from '#models/user'
import { belongsTo, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Space extends SpaceSchema {
  declare type: 'ROOM' | 'DM' | 'GROUP_DM'

  @belongsTo(() => User, {
    foreignKey: 'createdBy',
  })
  declare creator: BelongsTo<typeof User>

  @manyToMany(() => User, {
    pivotTable: 'space_members',
    pivotColumns: ['role'],
    pivotTimestamps: true,
  })
  declare members: ManyToMany<typeof User>
}
