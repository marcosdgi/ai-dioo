import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, belongsTo, column, computed, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import Sex from './sex.js'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import Industry from '#models/buisness/industry'
import Role from './role.js'
import Conversation from '#models/ia/conversations/conversation'

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
    declare avatarUrl: string | null

    @column()
    declare name: string

    @column()
    declare secondaName: string | null

    @column()
    declare paternalSurname: string

    @column()
    declare maternalSurname: string

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

    @computed()
    get fullName() {
        return `${this.name} ${this.secondaName ?? ""} ${this.paternalSurname} ${this.maternalSurname}`
    }


    @belongsTo(() => Sex)
    declare sex: BelongsTo<typeof Sex>

    @hasMany(() => Industry, {
        localKey: 'id',
        foreignKey: 'ownerId'
    })
    declare industry: HasMany<typeof Industry>

    @hasMany(() => Conversation, {
        localKey: 'id',
        foreignKey: 'userId'
    })
    declare conversations: HasMany<typeof Conversation>

    @manyToMany(() => Role, {
        localKey: 'id',
        relatedKey: 'id',
        pivotForeignKey: 'user_id',
        pivotRelatedForeignKey: 'role_id',
        pivotTable: 'user_role'
    })
    declare roles: ManyToMany<typeof Role>

}