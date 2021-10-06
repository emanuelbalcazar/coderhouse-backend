'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CupcakeSchema extends Schema {
  up () {
    this.create('cupcakes', (table) => {
      table.increments()
      table.string('name', 80).unique()
      table.string('description', 150)
      table.integer('price')      
      table.timestamps()
    })
  }

  down () {
    this.drop('cupcakes')
  }
}

module.exports = CupcakeSchema
