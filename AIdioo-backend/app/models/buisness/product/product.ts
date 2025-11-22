import { DateTime } from 'luxon'
import { BaseModel, column, computed, manyToMany } from '@adonisjs/lucid/orm'
import Category from './category.js'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Product extends BaseModel {
    static table = 'products'

    @column({ isPrimary: true })
    declare id: number

    @column()
    declare name: string

    @column()
    declare price: number

    @column()
    declare cost: number

    @column()
    declare stock: number

    @column()
    declare description: string

    @column.dateTime()
    declare boughtAt: DateTime

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime

    @computed()
    get revenue(): number {
        return this.price - this.cost
    }

    @manyToMany(() => Category, {
        localKey: 'id',
        relatedKey: 'id',
        pivotTable: 'products_categories',
        pivotForeignKey: 'productId',
        pivotRelatedForeignKey: 'categoryId'
    })
    declare categories: ManyToMany<typeof Category>

}