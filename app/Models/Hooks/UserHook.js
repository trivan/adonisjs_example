'use strict'

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

const UserHook = exports = module.exports = {}

UserHook.hashPassword = async (user) => {
    user.password = await Hash.make(user.password)
}

UserHook.validate = async (user) => {
    if (!user.username) {
      throw new Error('Username is required')
    }
}
