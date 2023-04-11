const router = require('express').Router()
const User = require('../models/User')


// get user 
router.get("/",async(req,res) =>{
 try{const user = await User.findById(req.body.id)
 res.status(200).json(user)
 } catch(err)  {
  console.log(err)
 }
})




module.exports = router