'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments()
      table.string('title', 250).notNullable()
      table.text('body').notNullable()
      table.timestamps(),
      table.integer('user_id')
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostSchema
