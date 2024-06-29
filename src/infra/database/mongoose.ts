import mongoose from "mongoose";
import { HttpExceptions } from "../../types/http.exceptions";

export async function connect() {
  try {
    if (!process.env.DATABASE_URL)
      throw new HttpExceptions(500, "Missing Database URL");
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Database conected");
  } catch (error: any) {
    throw new HttpExceptions(500, error.message);
  }
}
