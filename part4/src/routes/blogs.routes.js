import { Router } from "express";
import { Blog } from "../../schemas/blogSchema.js";
import verifyLoggedIn from "../../middlewares/jsonToken.js";
const router = Router();

router.get("/blogs", (req, res) => {
  Blog.find()
    .populate("author")
    .then((blogs) => {
      console.log(blogs);
      res.status(200).json({
        message: "Data successfully retrieved",
        data: blogs,
      });
    })
    .catch((error) => res.status(400).json({ errorMessage: error.message }));
});

router.post("/blogs/create", verifyLoggedIn, (req, res) => {
  const { title, url, likes } = req.body;
  if (title === "" || url === "" || likes === "") {
    res.status(400).json({
      errorMessage: "One of the fields is empty, please fill all of them",
    });
    return;
  }
  Blog.create({ title, author: req.userId, url, likes })
    .then((blog) => {
      console.log(blog);
      res.status(201).json({
        message: "Blog successfully created",
        data: blog,
      });
    })
    .catch((error) => res.status(400).json({ errorMessage: error.message }));
});

  router.put("/blogs/update/:id", verifyLoggedIn, (req, res) => {
    console.log(req.body)
    const { id } = req.params;
    const { likes } = req.body;
    Blog.updateOne(
      { _id: id, author: req.userId },
      {
        likes,
      }
    )
      .then((blog) => {
        console.log(blog);
        res.status(202).json({
          message: "Blog successfully updated",
          data: blog,
        });
      })
      .catch((error) => res.status(400).json({ errorMessage: error.message }));
  });

router.delete("/blogs/delete/:id", verifyLoggedIn, (req, res) => {
  Blog.deleteOne({ _id: req.params.id, author: req.userId })
    .then((blog) => {
      console.log(blog);
      res.status(200).json({
        message: "Blog successfully deleted",
        data: blog,
      });
    })
    .catch((error) => res.status(400).json({ errorMessage: error.message }));
});

export default router;
