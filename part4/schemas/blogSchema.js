import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  url: String,
  likes: Number,
});

const Blog = mongoose.model("Blog", blogSchema);
export { Blog };
