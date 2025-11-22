import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'shoppings_products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('shopping_id').unsigned().notNullable().references('id').inTable('shoppings').onDelete('CASCADE')
      table.integer('product_id').unsigned().notNullable().references('id').inTable('products').onDelete('CASCADE')

      table.unique(['shopping_id', 'product_id'])
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}