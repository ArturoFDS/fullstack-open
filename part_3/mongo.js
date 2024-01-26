import mongoose from "mongoose";

export async function databaseConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_ATLAS_URI);
    console.log(
      "🚀 The database is running, database name:",
      mongoose.connection.name
    );
  } catch (error) {
    console.error(error.message);
  }
}
