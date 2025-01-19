const express = require("express");
const router = express.Router();

const Hall = require('../model/Hall'); // Adjust the path as needed

router.get("/getallhall", async (req, res) => {
    try {
        const halls = await Hall.find({});
        return res.json({ halls });
    } catch (error) {
        return res.status(500).json({ message: "Server Error: " + error.message });
    }
});

module.exports = router;

