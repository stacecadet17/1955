var mongoose = require('mongoose');
var User = mongoose.model('User');
mongoose.promise = global.Promise;

module.exports = {
///////queries go here
  show: function(req, res){
    console.log("heree")
    User.find({}, function(err, results){
      console.log("users");
      res.json({users: results})
    })
  },
  showsingle: function(req, res){
    User.find({ name: req.params.name }, function(err, results) {
      res.json({ users: results });
    })
  },
  add: function(req, res){
    console.log("POST DATA", req.params.name);
    var user = new User({ name:req.params.name });

          user.save(function(err, results){
            if(err) {console.log(err); }
            res.redirect('/')
  })
},
destroy: function(req, res){
    console.log('removing user');
  User.remove({name:req.params.name}, function(req, err){
    if(err){console.log(err); }
    res.redirect('/')
  })
}
}
