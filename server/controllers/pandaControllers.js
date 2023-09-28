const Panda = require("../models/panda");

exports.getProfile = ((req, res) => {
    console.log("Profile route hit!");
    res.json({ message: "Hello from the backend! hohohoho! - request : profile" });
});

exports.addPanda = (async (req, res) => {
    try {
        const { name, birthday, imageUrl, address, personality } = req.body;
        const newPanda = await Panda.create({name,birthday,imageUrl,address,personality});
        res.status(201).json(newPanda);
    } catch (error) {
        res.status(500).send(error.message);
    }
});