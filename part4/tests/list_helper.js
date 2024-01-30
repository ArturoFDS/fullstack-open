function totalLikes(blogs) {
  let totalBlogsLikes = 0;
  blogs.forEach((blog) => {
    totalBlogsLikes += blog.likes;
  });
  return totalBlogsLikes;
}
module.exports = { totalLikes };
