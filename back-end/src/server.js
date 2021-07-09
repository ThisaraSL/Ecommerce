const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//Import MongoDB dbKey
const database = require('../database/connection').dbKey;
const app = express();
//environment variable
dotenv.config();

//routes
const userRoutes = require('./routes/user');

//mongoDB connection
mongoose.connect(database, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log('Database Connected!')
})

app.use(bodyParser())
app.use('/api', userRoutes)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});