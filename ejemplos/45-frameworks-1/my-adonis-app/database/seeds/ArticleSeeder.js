'use strict'

/*
|--------------------------------------------------------------------------
| ArticleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Article = use('App/Models/Article')

class ArticleSeeder {
  async run () {
    await Article.create({title: 'libro', text: 'texto', author: 'emanuel'})
  }
}

module.exports = ArticleSeeder
