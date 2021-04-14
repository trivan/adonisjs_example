'use strict'

class StoreUser {
  get validateAll () {
    return true
  }

  // get sanitizationRules () {
  //   return {
  //     email: 'normalize_email',
  //     // age: 'to_int',
  //     password: 'to_string',
  //     username: 'to_string'
  //   }
  // }

  get rules () {
    return {
      email: 'required|email|unique:users',
      password: 'required',
      username: 'required'
    }
  }

  get messages () {
    return {
      'email.required': 'You must provide a email address.',
      'email.email': 'You must provide a valid email address.',
      'email.unique': 'This email is already registered.',
      'password.required': 'You must provide a password',
      'username.required': 'You must provide a user name'
    }
  }
}

module.exports = StoreUser