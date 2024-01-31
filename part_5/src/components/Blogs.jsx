const BlogsContainer = ({ blogs }) => {
  return (
    <div>
      <main>
        <h2>Rendered Blogs</h2>
        {blogs?.map((blog) => (
          <section key={blog._id}>
            <div>
              <span>
                <strong> Title: </strong>
                <i> {blog.title}</i>
              </span>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default BlogsContainer;
