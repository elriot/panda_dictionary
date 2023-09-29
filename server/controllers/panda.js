const Panda = require("../models/panda");

exports.fetchAll = async (req, res) => {
    try{
        const allPandas = await Panda.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        });
        res.status(201).json(allPandas);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.fetchById = async (req, res) => {
    try {
        const panda = await Panda.findByPk(req.params.id);
        if (!panda) {
            return res.status(404).json({ error: "Panda not found" });
        }
        res.status(200).json(panda);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.addPanda = async (req, res) => {
    try {
        const { name, birthday, imageUrl, address, personality } = req.body;
        const newPanda = await Panda.create({name,birthday,imageUrl,address,personality});
        res.status(201).json(newPanda);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.editPanda = async (req, res) => {
    try {
        const { id, name, birthday, imageUrl, address, personality } = req.body;

        if (!id) {
            return res.status(400).json({ error: "ID is required" });
        }

        const updated = await Panda.update(
            { name, birthday, imageUrl, address, personality },
            { where: { id: id } }
        ); 

        if (!updated) {
            return res.status(404).json({ error: "Panda not found" });
        } else {
            return res.status(200).json({success:true});
        }

    } catch (error) {
        res.status(500).send(error.message);
    }
};