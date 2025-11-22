// app/models/Conversation.ts
import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Message from './message.js'

export default class Conversation extends BaseModel {

static table = 'conversations'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare title: string | null

  @column()
  declare status: 'active' | 'archived' | 'deleted'

  @column()
  declare context: object | null // contexto general de la conversaci�n

  @column()
  declare metadata: object // configuraci�n, preferencias, etc

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Message)
  declare messages: HasMany<typeof Message>
}
