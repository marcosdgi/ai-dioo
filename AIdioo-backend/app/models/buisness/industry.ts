import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import Category from './product/category.js'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import Sucursal from './sucursal.js'
import User from '#models/auth/user'

export default class Industry extends BaseModel {
  static table = 'industries'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare logoUrl: string | null

  @column()
  declare description: string

  @column()
  declare ownerId: number

  @column()
  declare phone: string | null

  @column()
  declare mainCategoryId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Category)
  declare mainCategory: BelongsTo<typeof Category>

  @belongsTo(() => User)
  declare owner: BelongsTo<typeof User>

  @manyToMany(() => User, {
    localKey: 'id',
    relatedKey: 'id',
    pivotForeignKey: 'industry_id',
    pivotRelatedForeignKey: 'user_id',
    pivotTable: 'industry_partners'
  })
  declare partners: ManyToMany<typeof User>

  @hasMany(() => Sucursal, {
    localKey: 'id',
    foreignKey: 'industryId'
  })
  declare sucursals: HasMany<typeof Sucursal>

}