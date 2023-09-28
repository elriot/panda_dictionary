const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

//model 
const Panda = require('./models/panda');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/profile', (req, res) => {
    res.json({ message: "Hello from the backend! hohohoho! - request : profile" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
