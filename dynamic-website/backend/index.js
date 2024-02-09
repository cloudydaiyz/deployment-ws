// Simple express app that keeps a global counter
const express = require("express");
const cors = require("cors");
const app = express();

const port = 80;

let clickCount = 0;

app.use(cors());

app.get("/", (req, res) => {
    clickCount++;
    
    res.status(200).send(`${clickCount}`);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});