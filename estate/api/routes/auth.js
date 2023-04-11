const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

router.get("/", (req, res) => {
 res.send("welcome to the auth page")
})
// register
router.post("/register", async (req, res) => {


 try {
  // generate new password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt)

  // create new user
  const newUser = await new User({
   username: req.body.username,
   email: req.body.email,
   password: hashedPassword
  })

  // save user
  const user = await newUser.save();
  res.status(200).json("user is registered")
 } catch (err) {
  console.log(err)
 }
}

)

// login
router.post("/login", async (req, res) => {
 try {
  const user = await User.findOne({ email: req.body.email })
  if (!user) return res.status(400).json("no user found")
  const validPassword = await bcrypt.compare(req.body.password, user.password)
  if (!validPassword) return res.status(400).json("wrong password")

  res.status(200).json(user)
 } catch(err) {
  res.status(500).json(err)
 }
})



module.exports = router