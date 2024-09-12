const Admisn = require("../Model/Admisn");
const router = require("express").Router();



// POST
router.post("/post", async (req, res) => {
    try {
        const { firstname, lastname, age, sex, religion, phone, email, state, } = req.body;

        // create new user instance
        const newAdmisn = new Admisn({
            firstname,
            lastname,
            age,
            sex, 
            religion,
            phone,
            email,
            state,
        });

        // save to database
        const savedAdmisn = await newAdmisn.save();
        
        // send success response
        res.status(200).json(savedAdmisn);
    } catch (error) {
        // send error response
        res.status(500).json({ message: error.message });
    }    
});



// GET ALL USER
router.get("/find", async (req, res) => {
    try {
        const admisn = await Admisn.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
});



// GET ONE USER
router.get("/find/:id", async (req, res) => {
    try {
        const admisn = await Admisn.findById(req.params.id);
        res.status(200).json(admisn);
    } catch (error) {
        res.status(500).json(error);
    }
});



// UPDATE
router.put("/update/:id", async (req, res) => {
    try {
        const admisn = await Admisn.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true },
        );

        res.status(200).json(admisn);
    } catch (error) {
        res.status(500).json(admisn);
    }
});



// DELETE
router.delete("/delete/:id", async (req, res) => {
    try {
        await Admisn.findByIdAndDelete(req.params.id);
        res.status(200).json("Data Deleted Successfully");
    } catch (error) {
        res.status(500).json(error);
    }
});



module.exports = router;