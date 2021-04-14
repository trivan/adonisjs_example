'use strict'

var moment = require('moment');

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class User extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    // this.addHook('beforeSave', async (userInstance) => {
    //   if (userInstance.dirty.password) {
    //     userInstance.password = await Hash.make(userInstance.password)
    //   }
    // })

    // this.addHook('beforeCreate', async (userInstance) => {
    //   userInstance.password = await Hash.make(userInstance.password)
    // })

    this.addTrait('@provider:Lucid/Slugify', {
      fields: {
        username: 'username'
      },
      strategy: 'dbIncrement'
    })

    this.addHook('beforeSave', 'UserHook.hashPassword')
  }

  getCreatedDate() {
    return moment(this.created_at).format('MM-DD-YYYY, hh:mm:ss');
  }

  // Phương thức này sẽ overwrite lên giá trị ngày tháng sẽ lưu xuống database
  static formatDates (field, value) {
    if (field === 'dob') {
      return value.format('YYYY-MM-DD')
    }
    return super.formatDates(field, value)
  }

  getUpdateDate() {
    var d = new Date(this.updated_at);

    // var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // var options = { dateStyle: 'full', timeStyle: 'long' };
    // return d.toLocaleDateString("en-US", options);

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
    var options = {
      year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric',
      hour12: false,
      timeZone: 'America/Los_Angeles',
      literal: "-"
    };
    return new Intl.DateTimeFormat('en-US', options).format(d);
  }

  posts () {
    return this.hasMany('App/Models/Post')
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = User
