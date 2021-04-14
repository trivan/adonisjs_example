'use strict'

// const { validate } = use('Validator')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with users
 */
class UserController {
  /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    // console.log(request.country)

    const User = use('App/Models/User')
    var users = await User.all()

    // converting to JSON array
    // const usersJSON = users.toJSON()

    // console.log(users.rows[0].updated_at)
    // for (const [key, value] of Object.entries(users.rows)) {
    //   users.rows[key].updated_at = User.formatDates(value.updated_at)
    // }

    return view.render('user.index', {users: users.rows})
  }

  /**
   * Render a form to be used for creating a new user.
   * GET users/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    return view.render('user.create')
  }

  /**
   * Create/save a new user.
   * POST users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    // const rules = {
    //   email: 'required|email|unique:users,email',
    //   password: 'required'
    // }

    // const validation = await validate(request.all(), rules)

    // if (validation.fails()) {
    //   session
    //     .withErrors(validation.messages())
    //     .flashExcept(['password'])

    //   return response.redirect('back')
    // }

    var data = request.post()
    // console.log(data)
    // console.log(request.input('username'))
    // save to DB
    const User = use('App/Models/User')
    const user = new User()
    user.username = data.username
    user.email = data.email
    user.password = data.password
    await user.save()

    return response.route('UserController.index')
  }

  /**
   * Display a single user.
   * GET users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing user.
   * GET users/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update user details.
   * PUT or PATCH users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a user with id.
   * DELETE users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = UserController
