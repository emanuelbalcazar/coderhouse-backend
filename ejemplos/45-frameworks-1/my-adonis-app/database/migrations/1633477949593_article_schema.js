'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArticleSchema extends Schema {
  up () {
    this.create('articles', (table) => {
      table.increments();
      table.string('title').notNullable()
      table.string('text').notNullable()
      table.string('author').notNullable()
    })
  }

  down () {
    this.drop('articles')
  }
}

module.exports = ArticleSchema
