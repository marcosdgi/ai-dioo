import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Industry from './industry.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'

export default class Sucursal extends BaseModel {
  static table = 'sucursals'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare industryId: number

  @column()
  declare name: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Industry)
  declare industry: BelongsTo<typeof Industry>

}