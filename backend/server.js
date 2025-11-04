const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port =  process.env.backend_port || 3000;


app.get("/", (req, res) => {
    res.send("Server is running");
})

app.listen(port, () => {
    console.log(`server is running on port http://localhost:${port}`)
})