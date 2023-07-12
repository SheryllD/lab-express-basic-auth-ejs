const router = require ("express").Router()
//const UserModel = require("../models/User.model")
//const router = express.Router()
const bcrypt = require("bcryptjs")

// Get Signup page 
router.get("/signup", (req, res) => {
    res.render("auth/signup")
}); 

// Post data to register a new user 
router.post("/signup", async (req, res) => {
//    console.log(req.body)
    const payload = { ...req.body}
    
    delete payload.password
    const salt = bcrypt.genSaltSync(13)
    
    payload.passwordHash = bcrypt.hashSync(req.body.password, salt) 

    try {
    const newUser = await User.create(payload)
    res.send(newUser)    
    }
    catch (err) {
        console.log(err)
    }
}); 

module.exports = router; 