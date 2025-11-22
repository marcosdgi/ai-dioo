import { BaseModel, column } from "@adonisjs/lucid/orm";
import { DateTime } from "luxon";


export default class IAProfile extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime
    
    @column.dateTime({ autoUpdate: true, autoCreate: true })
    declare updatedAt: DateTime
}