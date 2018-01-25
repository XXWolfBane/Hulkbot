const express = require("express");

const path = require("path");

const app = express();

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'home.html'));
});

app.listen(50451, () => {
    console.info("Running on Port 50451.")
});

app.use('/api/discord', require('./api/discord'))
