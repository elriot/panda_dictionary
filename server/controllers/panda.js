const Panda = require("../models/panda");

exports.getProfile = (async (req, res) => {
    console.log("Profile route hit!");
    try{
        const allPandas = await Panda.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        });
        res.status(201).json(allPandas);
    } catch (error) {
        res.status(500).send(error.message);
    }
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