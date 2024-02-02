import { useRef, useState } from 'react'

const BlogsContainer = ({ blogs, onLikesUpdateF }) => {
  const [showDetails, setShowDetails] = useState(-1)
  const [numberOfLikes, setNumberOfLikes] = useState()

  const handleOnShowDetails = (index) => {
    setShowDetails(showDetails === index ? -1 : index)
    console.log(showDetails)
    console.log(index)
  }
  return (
    <div>
      <main>
        <h2>Rendered Blogs</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
          {blogs?.map((blog, blogIndex) => (
            <section key={blog._id}>
              <div>
                <span>
                  <strong> Title: </strong>
                  <i> {blog.title}</i>
                  <button onClick={() => handleOnShowDetails(blogIndex)}>
                    {!showDetails ? 'Close Details' : 'Show Details'}
                  </button>
                </span>
              </div>
              {showDetails === blogIndex && (
                <ul>
                  <li>
                    Url of the blog: <strong>{blog.url}</strong>
                  </li>
                  <li>
                    Likes of the blog:
                    <strong>
                      {numberOfLikes
                        ? numberOfLikes
                        : blog.likes}
                    </strong>
                    <button
                      onClick={(e) => {
                        setNumberOfLikes(
                          numberOfLikes ? numberOfLikes + 1 : blog.likes + 1
                        )
                        onLikesUpdateF(e, blog._id, numberOfLikes)
                      }}
                    >
                      Give it a like
                    </button>
                  </li>
                  <li>
                    Author of the blog: <strong>{blog.author?.username}</strong>
                  </li>
                </ul>
              )}
            </section>
          ))}
        </div>
      </main>
    </div>
  )
}

export default BlogsContainer
