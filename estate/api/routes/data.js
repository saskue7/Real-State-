const User = require('../models/User')
const router = require('express').Router()
// saving data
router.post("/", async(req,res) => {
 console.log("hey")
 try{
  console.log("hey")
  await User.findByIdAndUpdate(req.body.id,{$push :{saves:req.body.externalID}})
  res.status(200).json("Done")
  
 }
 catch(err){
  res.status(500).json("errorr not possible")
 }
})

// getting all data

router.get("/",async(req,res) => {
 try{
  const user = await User.findById(req.body.id)
  res.status(200).json(user.saves)
 }catch(err){
  res.status(500).json(err)
 }
})

module.exports = router