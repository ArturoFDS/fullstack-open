// const dummy = require("./list_helper").dummy;
const {
  totalLikes,
  blogWithMostLikes,
  authorWithMostBlogs,
} = require("./list_helper");

// test("listHelper returns one", () => {
//   const blogs = [];

//   const result = dummy(blogs);
//   expect(result).toBe(1);
// });

describe("total likes", () => {
  const listWithOneBlog = [
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0,
    },
  ];

  test("when list has only one blog, equals the likes of that", () => {
    const result = totalLikes(listWithOneBlog);
    expect(result).toBe(5);
  });
});

describe("Blog with more likes", () => {
  const listOfBlogs = [
    {
      author: "Julius Black",
      likes: 52,
    },
    {
      author: "John Doe",
      likes: 78,
    },
    {
      author: "Jane Smith",
      likes: 34,
    },
    {
      author: "Alex Johnson",
      likes: 91,
    },
    {
      author: "Emily Brown",
      likes: 17,
    },
    {
      author: "Michael Davis",
      likes: 63,
    },
    {
      author: "Sophia Wilson",
      likes: 42,
    },
    {
      author: "Oliver Thompson",
      likes: 55,
    },
    {
      author: "Emma Garcia",
      likes: 29,
    },
    {
      author: "William Martinez",
      likes: 81,
    },
  ];
  test("It returns the blog with more likes", () => {
    const result = blogWithMostLikes(listOfBlogs);
    expect(result.likes).toEqual(91);
  });
});

describe("Returns the author with more blogs", () => {
  const listOfAuthorsAndBlogs = [
    {
      author: "Robert C. Martin",
      blogs: 3,
    },
    {
      author: "John Doe",
      blogs: 5,
    },
    {
      author: "Jane Smith",
      blogs: 2,
    },
    {
      author: "Alex Johnson",
      blogs: 1,
    },
    {
      author: "Emily Brown",
      blogs: 4,
    },
    {
      author: "Michael Davis",
      blogs: 2,
    },
    {
      author: "Sophia Wilson",
      blogs: 3,
    },
    {
      author: "Oliver Thompson",
      blogs: 2,
    },
    {
      author: "Emma Garcia",
      blogs: 1,
    },
    {
      author: "William Martinez",
      blogs: 3,
    },
  ];
  test("It is suppossed to return the author with more blogs", () => {
    const result = authorWithMostBlogs(listOfAuthorsAndBlogs);
    expect(result.author).toBe("John Doe");
  });
});
