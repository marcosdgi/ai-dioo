import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import User from '#models/auth/user'
import Product from './product.js'

export default class Shopping extends BaseModel {
  static table = 'shoppings'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare quantity: number

  @column()
  declare totalPrice: number

  @column()
  declare userId: number | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @manyToMany(()=>Product,{
    localKey: 'id',
    relatedKey: 'id',
    pivotTable: 'shoppings_products',
    pivotForeignKey: 'shoppingId',
    pivotRelatedForeignKey: 'productId'
  })
  declare products: ManyToMany<typeof Product>
}