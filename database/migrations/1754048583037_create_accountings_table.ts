import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'accountings'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('type').notNullable()
      table.decimal('amount', 12, 2).notNullable()
      table.string('category').notNullable()
      table.date('date').notNullable()
      table.string('payment_method').notNullable()
      table.text('description').nullable()
      table.string('reference_number').nullable()
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())    
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}