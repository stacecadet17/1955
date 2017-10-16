// require mongoose
var mongoose = require('mongoose');
//connect to mongoose
mongoose.connect('mongodb://localhost/1955');
// create the schema
var UserSchema = new mongoose.Schema({
  name: String,
})
// register the schema as a model
var User = mongoose.model('User', UserSchema);
