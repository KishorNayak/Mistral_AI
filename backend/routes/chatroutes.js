import express from "express";
const router = express.Router();
import { chatCompletion } from "../controllers/chat_completion.js";

router.get('/chat',(req,res) => {
    res.send('This is chat route');
})
router.post('/chat' ,chatCompletion);

export default router;