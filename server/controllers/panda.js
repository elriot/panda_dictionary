const Panda = require("../models/panda");

exports.fetchAll = async (req, res) => {
  try {
    const allPandas = await Panda.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    console.log(allPandas);
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
    const { name, birthday, imageUrl, address, personality, gender } = req.body;
    const newPanda = await Panda.create({
      name,
      gender,
      birthday,
      imageUrl,
      address,
      personality,
    });
    res.status(201).json(newPanda);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.editPanda = async (req, res) => {
  try {
    const { id, name, birthday, imageUrl, address, personality, gender } = req.body;

    if (!id) {
      return res.status(400).json({ error: "ID is required" });
    }

    const updated = await Panda.update(
      { name, birthday, imageUrl, address, personality, gender },
      { where: { id: id } }
    );

    if (!updated) {
      return res.status(404).json({ error: "Panda not found" });
    } else {
      return res.status(200).json({ success: true });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deletePanda = async (req, res) => {
  // console.log("delete panda!");
  try {
    const pandaId = req.params.id;
    const deletedRowCount = await Panda.destroy({ where: { id: pandaId }});

    if (deletedRowCount === 0) {
      return res.status(404).json({ message: "No panda found to delete" });
    }

    // console.log("Panda deleted");
    res.status(200).json({ message: "Panda deleted successfully" });
  } catch (error) {
    console.error("Error deleting panda:", error.message);
    res.status(500).send(error.message);
  }
};

