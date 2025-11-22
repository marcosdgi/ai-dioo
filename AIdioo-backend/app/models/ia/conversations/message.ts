// app/models/Message.ts
import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Conversation from './conversation.js'

export default class Message extends BaseModel {

  static table = 'message'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare conversationId: number

  @column()
  declare role: 'user' | 'assistant' | 'system'

  @column()
  declare content: string

  @column()
  declare dataContext: object | null // datos de negocio consultados

  @column()
  declare promptUsed: string | null // prompt específico usado

  @column()
  declare tokensUsed: number

  @column()
  declare processingTime: number // ms

  @column()
  declare metadata: object // análisis, sugerencias, etc

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @belongsTo(() => Conversation)
  declare conversation: BelongsTo<typeof Conversation>
}