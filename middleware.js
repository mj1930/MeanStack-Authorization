var exports = module.exports;
var users = require('../models/userSchema');

exports.auth= function(req,res,next){
  if(req.session){
    if(req.session.passport.user.type==0){
      next();
    }
    else{
      if(req.method=="POST"){
        users.findOne({username:req.body.username},function(err,user){
          if(req.body.type<req.session.passport.user.type){
            res.send("Unauthorised");
            console.log("Unauthorised")
          }
          else{
            next();
          }
        })
      }
      else{
      users.findOne({username:req.params.username},function(err,user){
        if(user.type<req.session.passport.user.type){
          users.find(function(err, users){
             res.json(users);
             console.log("Unauthorised")
         });
        }
        else{
          next();
        }
      })
    }
    }
  }
}
