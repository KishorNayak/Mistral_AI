import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import fs from "fs";
import path from "path";
``
export async function textsplitter(filepath) {
    // Getting the file
    const fileContent = fs.readFileSync(filepath, "utf-8");

    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 100,
        chunkOverlap: 20,
    });

    const documents = await splitter.createDocuments([fileContent]);
    const arr = documents.map((doc) => doc.pageContent);
    return arr;
}


Ollama.embeddings()