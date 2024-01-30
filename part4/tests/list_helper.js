function totalLikes(blogs) {
  let totalBlogsLikes = 0;
  blogs.forEach((blog) => {
    totalBlogsLikes += blog.likes;
  });
  return totalBlogsLikes;
}

function blogWithMostLikes(blogs) {
  let blogWithMoreLikes;
  blogs.forEach((blog) => {
    blogWithMoreLikes =
      blogWithMoreLikes?.likes > blog.likes ? blogWithMoreLikes : blog;
  });
  return blogWithMoreLikes;
}

function authorWithMostBlogs(blogs) {
  let authorWithMoreBlogs;
  blogs.forEach((blog) => {
    authorWithMoreBlogs =
      authorWithMoreBlogs?.blogs > blog.blogs ? authorWithMoreBlogs : blog;
  });
  return authorWithMoreBlogs
}
module.exports = { totalLikes, blogWithMostLikes, authorWithMostBlogs };
