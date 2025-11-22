import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('second_name').nullable()
      table.string('paternal_surname')
      table.string('maternal_surname')
      table.string('avatar_url').nullable()
      table.string('email').notNullable().unique()
      table.string('password').notNullable()
      table.integer('age').unsigned().notNullable()
      table.integer('sex_id').unsigned().notNullable().references('id').inTable('sexes').onDelete('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}