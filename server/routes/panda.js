const path = require('path');

const express = require('express');

const pandaController = require('../controllers/panda');
const router = express.Router();

router.post('/add', pandaController.addPanda);
router.get('/fetchAll', pandaController.fetchAll);
router.get('/fetchById/:id', pandaController.fetchById);
router.put('/edit', pandaController.editPanda);



module.exports = router;


// app.get('/panda/profile', (req, res) => {
//     res.json({ message: "Hello from the backend! hohohoho! - request : profile" });
// });

// app.post('/panda/add', async (req, res) => {
//     res.json({ message: "hi, from DB! you asked post reqeust to add/panda" });
//     try {
//         const { name, birthday, imageUrl, address, personality } = req.body;
//         const newPanda = await Panda.create({name,birthday,imageUrl,address,personality});
//         console.log("newPanda : ", newPanda);
//         res.status(201).json(newPanda);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// });