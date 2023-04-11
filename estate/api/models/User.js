const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
 username:{
  type:String,
  required:true,
  min:6,
  max:20,
  unique:true,
 },
 email: {
  type: String,
  required: true,
  unique: true,
  max:50,
 },
 password: {
  type: String,
  required: true,
  min: 6,
  max: 20,
  unique: true,
 },
 profilePitcure: {
  type:String,
  default:""
 },
 saves: {
  type:Array,
  default:[]
 },
 isAdmin: {
  type:Boolean,
  default:false,
 }
 },{timestamps:true}
)



module.exports = mongoose.model("User",UserSchema)