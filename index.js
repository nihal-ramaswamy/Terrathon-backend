const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

//Import Paths
const participant = require('./routes/participants_data.routes.js');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`Connected to DB`);
}).catch(err => {
    console.log(`[CONNECTING TO DB] Error: ${err}`)
});


//Paths and routes
app.use('/participant', participant);

// Starting the server
const port = process.env.PORT || 5234;
app.listen(port, () => {
    console.log(`[APP START] Server listening on PORT: ${port}`);
});
