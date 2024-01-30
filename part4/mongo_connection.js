import mongoose from "mongoose";
export async function databaseConnection() {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log(` Database "${mongoose.connection.name}" is running 😁`);
  } catch (error) {
    console.error({ error: error.message });
  }
}
