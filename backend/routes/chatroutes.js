const express = require("express");
const router = express.Router();
const chatCompletion = require("../chat_completion");


router.post('/chat' ,chatCompletion);

module.exports = router;