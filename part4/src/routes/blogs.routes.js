import { Router } from "express";
import { Blog } from "../../schemas/blogSchema.js";
const router = Router();

router.get("/blogs", (req, res) => {
  Blog.find()
    .then((blogs) => {
      console.log(blogs);
      res.status(200).json({
        message: "Data successfully retrieved",
        data: blogs,
      });
    })
    .catch((error) => res.status(400).json({ errorMessage: error.message }));
});

router.post("/blogs/create", (req, res) => {
  const { title, author, url, likes } = req.body;
  Blog.create({ title, author, url, likes })
    .then((blog) => {
      console.log(blog);
      res.status(201).json({
        message: "Blog successfully created",
        data: blog,
      });
    })
    .catch((error) => res.status(400).json({ errorMessage: error.message }));
});

export default router;
