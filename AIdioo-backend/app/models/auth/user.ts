import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import Sex from './sex.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
    uids: ['email'],
    passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
    static accessTokens = DbAccessTokensProvider.forModel(User)

    static table = 'users'

    @column({ isPrimary: true })
    declare id: number

    @column()
    declare fullName: string | null

    @column()
    declare email: string

    @column({ serializeAs: null })
    declare password: string

    @column()
    declare age: number

    @column()
    declare sexId: number

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime | null


    @belongsTo(() => Sex)
    declare sex: BelongsTo<typeof Sex>
}