import ollama from 'ollama';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL,process.env.SUPABASE_API_KEY)

const example = [
    'Towards the end, we will also go through how you can use Ollama to easily run inference on your own computer, and use it as the backbone of any AI app you develop locally.',
    'It is common practice to declare arrays using the constkeyword, especially if you do not plan to reassign the variable itself (although you can still modify the array'
]


export async function generateEmbeddings() {
  const response = await ollama.embed({
    model: 'mistral:7b',
    input: example
  });

  const ans = example.map((item, index) => ({
    context : item,
    embedding : response.embeddings[index]
  }))

  const {data, error} = await supabase.from('vector_embeddings').insert(ans).select();
  if(error){
      console.log("Supabase Error" ,error);
      return;
  }
  console.log("Embeddings created successfully");
}

generateEmbeddings();