import { Router } from "express";
import { Blog } from "../../schemas/blogSchema.js";
const router = Router();

router.get("/testing/reset", async (req, res) => {
  await Blog.deleteMany({});

  res.status(204).end();
});

export default router;
