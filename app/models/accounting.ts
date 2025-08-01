import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Accounting extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare type: string

  @column()
  declare amount: number
  
  @column()
  declare category: string
  
  @column.date()
  declare date: DateTime
  
  @column()
  declare payment_method: string
  
  @column()
  declare description: string
  
  @column()
  declare reference_number: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}