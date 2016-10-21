var mongoose = require('mongoose');
var Schema=mongoose.Schema;

var userCol = new Schema({
  first_name:String,
  last_name:String,
  username:String,
  password:String,
  type:{
    type:String,
    enum:[0,1,2],
    default:2
  }
})
module.exports = mongoose.model('users',userCol);
