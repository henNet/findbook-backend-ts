import OpenAI from "openai";
import { HttpExceptions } from "../../../types/http.exceptions";

export async function generateEmbeddings(input: string) {
  const openAI = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const response = await openAI.embeddings.create({
      input,
      model: "text-embedding-ada-002",
    });
    console.log(response.data[0].embedding);
    return response.data[0].embedding;
  } catch (error: any) {
    throw new HttpExceptions(500, error.message);
  }
}
