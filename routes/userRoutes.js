const express = require("express");
const router = express.Router();
const User = require("../models/user");
//GET USERS

// GET USER BY ID
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({
            message: "Server Error"
        });
    }
});

    // UPDATE USER NAME
router.put("/:id", async (req, res) => {
    try {
        const { name } = req.body;
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { name: name },
            { new: true }  );
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        res.json({
            message: "User name updated successfully",
            user: user
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error"});}
});
module.exports = router;


