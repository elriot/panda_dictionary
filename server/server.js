const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;
const sequelize = require('./util/database');

//model 
// const Panda = require('./models/panda');
const pandaRoute = require('./routes/panda');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log("Here!");
app.use('/panda', pandaRoute);

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
sequelize
.sync()
// .sync({ force: true })
.then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});

// app.listen(port, () => {
    // console.log(`Server is running on port ${port}`);
// });



