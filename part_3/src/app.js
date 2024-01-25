console.clear();
import express from "express";
import personsRoutes from "./routes/persons.routes.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", personsRoutes);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT} 🙌`);
});
