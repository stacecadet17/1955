var controller = require('../controllers/users.js');
module.exports = function(app) {

//routes go here
app.get('/', function(req, res) {
  controller.show(req, res)
})
app.get('/:name', function(req, res) {
  controller.showsingle(req, res)
})
app.get('/new/:name/', function(req, res) {
  controller.add(req, res)
})
app.get('/remove/:name', function(req, res) {
  controller.destroy(req, res)
})
}
