const User = require("../Model/User");
const router = require("express").Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");



// EMAIL SIGNUP
router.post("/signup", async (req, res) => {
    try {
        const { email, password } = req.body;

        // encrypt the password
        const encryptedPassword = CryptoJS.AES.encrypt(password, process.env.PASS_SEC).toString();
        
        
        // create new user
        const newUser = new User({
            email,
            password: encryptedPassword
        });


        // save to database
        const savedUser = await newUser.save();

        // send success response
        res.status(200).json(savedUser);
    } catch (error) {
        // send error response
        res.status(500).json({ message: error.message });
    }
});



// REGISTRATION
router.put("/update", async (req, res) => {
    try {
        const { firstname, lastname, age, sex, religion, phone, email, state, password } = req.body;


        // update User
        const updatedUser = new User({
            firstname,
            lastname,
            age,
            sex,
            religion,
            phone,
            email,
            state,
            password: encryptedPassword,
        });

        // save to database
        const savedUser = await updatedUser.save();

        // send success response
        res.status(200).json(updatedUser);
    } catch (error) {
        // send error response
        res.status(500).json({ message: error.message });
    }
});





// LOGIN
router.post ("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json("Wrong Email")
        }



        // decrypt the password
        const hashpassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC,
        );
        const originalPassword = hashpassword.toString(CryptoJS.enc.Utf8);


        if (originalPassword !== password) {
            return res.status(401).json("Wrong password")
        }

        const accessToken = jwt.sign(
            {
                isAdmin: user.isAdmin,
                isActive: user.isActive,
                isAdmitted: user.isAdmitted,
            },
            process.env.JWT_SEC,
            { expiresIn: "3d" },
        );
        const { password:_, ...others } = user._doc;

        res.status(200).json({ ...others, accessToken });

    }
})

// GET ALL USERS
router.get("/find", async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});



// GET ONE USER
router.get("/find/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});



// UPDATE
router.put("/update/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true },
        );

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});




// DELETE
router.delete("/delete/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Data Deleted Successfully");
    } catch (error) {
        res.status(500).json(error);
    }
});



module.exports = router;