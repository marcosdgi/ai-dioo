import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'message'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('conversation_id').references('id').inTable('conversations')
      table.enum('role', ['user', 'assistant', 'system'])
      table.string('content')
      table.json('data_context').nullable()
      table.string('prompt_used').nullable()
      table.integer('token_used')
      table.integer('processing_time')
      table.json('metadata')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}