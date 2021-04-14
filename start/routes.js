'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome').as('homepage')

// OR Route.get('/', ({ request, response, view }) => {
Route.get('/test', (ctx) => {
    // console.log(ctx.request) // ctx.request
    // console.log(ctx.response) // ctx.response
    // console.log(ctx.view) // ctx.view

    // get config | fileName.key
    const Config = use('Config')
    const appSecret = Config.get('app.appKey')
    console.log(appSecret)
    console.log(Config.get('database.mysql.connection.host'))
    console.log(Config.get('app.appSecret',"default secret")) // set default value

    // get env
    const Env = use('Env')
    const nodeEnv = Env.get('NODE_ENV')
    console.log(nodeEnv)
    const dbUser = Env.get('DB_USER', 'root') // set default value
    console.log(dbUser)
})

// http://localhost:3333/format or /format.html or /format.json
Route.get('/format', async ({ request, view }) => {

    console.log(request.format())
    if (request.format() === 'json') {
      return {name:'test', age: 25}
    }
  
    return view.render('welcome')
    // return view.render('users.index', { users })
  })
//   .formats(['json'])
  .formats(['json', 'html'], false)

Route
  .resource('users', 'UserController')
  .validator(new Map([
    [['users.store'], ['StoreUser']],
    [['users.update'], ['UpdateUser']]
  ]))
