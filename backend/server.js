import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
const port =  process.env.backend_port;
import chatRoutes from "./routes/chatroutes.js";
import testRoutes from "./routes/testroute.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server is running");
})

app.use("/api", chatRoutes);
app.use("/test", testRoutes);

app.listen(port, () => {
    console.log(`server is running on port http://localhost:${port}`)
})