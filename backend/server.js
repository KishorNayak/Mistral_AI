const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const app = express();
const port =  process.env.backend_port;
const chatRoutes = require("./routes/chatroutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server is running");
})

app.use("/api", chatRoutes);                

app.listen(port, () => {
    console.log(`server is running on port http://127.0.0.1:${port}`)
})