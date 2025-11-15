const express = require('express');
const bodyParser = require('body-parser');
const ollama  = require('ollama').default; 
const app = express();
app.use(bodyParser.json());

const chatCompletion = async (req, res) => {
  const {role , message} = req.body;

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
  });

  try {
    const responseStream = await ollama.chat({
      model: 'mistral:7b',
      messages: [{ role , content: message}],
      stream: true,
    });

    for await (const chunk of responseStream) {
      const content = chunk.message.content;
      res.write(` ${content}\n\n`);
    }
    res.write(' [DONE]\n\n');
    res.end();
  } catch (error) {
    res.write(` ERROR: ${error.message}\n\n`);
    res.end();
  }
};
pos

module.exports = chatCompletion;
