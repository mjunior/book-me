const { User } = require('../models')

class UserController {
  create (req, res) {
    res.render('auth/signup')
  }

  async store (req, res) {
    await User.create(req.body)
    return req.redirect('/')
  }
}
module.exports = new UserController()
