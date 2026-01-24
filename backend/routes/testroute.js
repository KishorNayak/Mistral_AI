import express from "express";
const router = express.Router();
import path from "path";
import { fileURLToPath } from "url";

router.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


router.use("/testchat", express.static(path.join(__dirname, "..", "test")));

export default router;
