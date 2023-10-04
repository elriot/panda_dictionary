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

// console.log("Here!");
app.use('/panda', pandaRoute);


sequelize
.sync()
// .sync({ force: true }) // reset db for test
.then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});




