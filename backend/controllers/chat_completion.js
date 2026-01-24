import ollama from 'ollama'

export async function chatCompletion(req,res) {
    const {user, message} = req.body;
  try{
    const response = await ollama.chat({
      model: 'mistral:7b',
      messages: [{ role: user, content: message }],
      stream: true,
    });

    //headers to make connection keep-alive
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    for await (const chunk of response) {
      process.stdout.write(chunk.message.content);
      res.write(chunk.message.content);
    }
    res.end();
  }
  catch(error){
    res.status(500).json({ error: `Ollama is not running ${error}` });
  }
}


// chatCompletion();