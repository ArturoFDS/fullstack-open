const Blogs = ({ blogs }) => {
  console.log(blogs);
  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <header>
            <h3>{blog.title}</h3>
          </header>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
