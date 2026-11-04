import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'messages'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('space_id')
        .unsigned()
        .references('id')
        .inTable('spaces')
        .onDelete('CASCADE')
        .notNullable()
      table
        .integer('sender_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('SET NULL')
        .nullable()

      table.text('content').notNullable()

      table
        .integer('parent_id')
        .unsigned()
        .references('id')
        .inTable('messages')
        .onDelete('SET NULL')
        .nullable() // Actually this is for thread, we not doing that now (TODO)

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.index(['space_id', 'created_at'], 'messages_space_created_idx')
      table.index(['parent_id'], 'messages_parent_idx') // for thread
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
