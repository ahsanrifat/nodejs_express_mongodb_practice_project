const express = require('express');
const mongoose = require('mongoose');

// app
const app = express();
// db
// process.env.DATABASE
// 'mongodb://localhost/InstaDB'
mongoose
    .connect('mongodb://localhost/InstaDB', {
        useNewUrlParser: true,
    })
    .then(() => console.log('db connected successfully!'))
    .catch(() => console.log('Error connecting db', process.env.DATABASE));
require('dotenv').config();

const port = process.env.PORT || 8000;

app.use(express.json());
app.listen(port, () => {
    console.log(`Server running on PORT->${port}`);
});
app.get('/', (req, res) => {
    res.send('Data Test');
});
