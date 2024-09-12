const Paid = require("../Model/Paid");
const router = require("express").Router();




// POST
router.post("/post", async (req, res) => {
    try {
        const { firstname, lastname, age, sex, religion, phone, email, state } = req.body;


        // create new instance
        const newPaid = new Paid({
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
        const savedPaid = await newPaid.save();

        // send success response
        res.status(200).json(savedPaid);
    } catch (error) {
        // send error message
        res.status(500).json({ message: error.message });
    }
});




// GET ALL PAID USERS
router.get("/find", async (req, res) => {
    try {
        const paid = await Paid.find();
        res.status(200).json(paid);
    } catch (error) {
        res.status(500).json(error);
    }
});




// GET ONE PAID USERS
router.get("/find/:id", async (req, res) => {
    try {
        const paid = await Paid.findByAndId(req.params.id);
        res.status(200).json(paid);
    } catch (error) {
        res.status(500).json(error);
    }
});




// UPDATE A PAID USER
router.put("/update/:id", async (req, res) => {
    try {
        const paid = await Paid.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true },
        );

        res.status(200).json(paid);
    } catch (error) {
        res.status(500).json(error);
    }
});




// DELETE A PAID USER
router.delete("/delete/:id", async (req, res) => {
    try {
        const paid = await Paid.findByIdAndDelete(req.params.id)
        res.status(200).json("Data Deleted Successfully");
    } catch (error) {
        res.status(500).json(error);
    }
});




module.exports = router;