const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;

// function createData(id, image, name, birthday, gender, job) {
//     return { id, image, name, birthday, gender, job };
// }

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/api/customer', (req, res) => {
//     res.send([
//         createData(1, "https://placekitten.com/64/64", "fufubao", "200720", "girl", "student"),
//         createData(2, "https://placekitten.com/64/64", "lebao", "120728", "boy", "manager"),
//         createData(3, "https://placekitten.com/64/64", "aibao", "130713", "girl", "ceo"),
//     ]);
// });
// console.log("hello!!! from server!");
app.listen(port, () => {
    // console.log(`Listen on port ${port} hehehe`);
})