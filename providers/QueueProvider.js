const { ServiceProvider } = require('@adonisjs/fold')

class QueueProvider extends ServiceProvider {
  register () {
    this.app.singleton('Adonis/Addons/Queue', () => {
      const Config = this.app.use('Adonis/Src/Config')
      return new (require('../src/Queue'))(Config)
    })
  }
}
module.exports = QueueProvider