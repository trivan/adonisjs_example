const { ServiceProvider } = require('@adonisjs/fold')
class MyProvider extends ServiceProvider {
  register () {
    // register bindings
  }

  boot () {
    // optionally do some initial setup

    const View = this.app.use('Adonis/Src/View')
    View.global('time', () => new Date().getTime())
  }
}
module.exports = MyProvider