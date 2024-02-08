import { useState } from 'react'
import PropTypes from 'prop-types'

const BlogsContainer = ({ blogs, onLikesUpdateF, onDeleteBlogF, authID }) => {
  PropTypes.checkPropTypes(
    BlogsContainer.propTypes,
    { blogs, onLikesUpdateF, onDeleteBlogF },
    'prop',
    'Blogs Container'
  )
  const [showDetails, setShowDetails] = useState(-1)
  const [numberOfLikes, setNumberOfLikes] = useState()

  const handleOnShowDetails = (index) => {
    setShowDetails(showDetails === index ? -1 : index)
  }
  return (
    <div>
      <main>
        <h2>Rendered Blogs</h2>
        <div
          id="blogs-container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
          {blogs?.map((blog, blogIndex) => (
            <section id='blog-container' key={blog._id}>
              <div>
                <span>
                  <strong> Title: </strong>
                  <i> {blog.title}</i>
                  <button
                    onClick={() => handleOnShowDetails(blogIndex)}
                    id="show-details"
                  >
                    {!showDetails ? 'Close Details' : 'Show Details'}
                  </button>
                </span>
              </div>
              {showDetails === blogIndex && (
                <section>
                  <ul>
                    <li className="url">
                      Url of the blog: <strong>{blog.url}</strong>
                    </li>
                    <li className="likes">
                      Likes of the blog:
                      <strong>{numberOfLikes || blog.likes}</strong>
                      <button
                        id="give-like"
                        onClick={(e) => {
                          setNumberOfLikes(
                            numberOfLikes ? numberOfLikes + 1 : blog.likes + 1
                          )
                          onLikesUpdateF(
                            e,
                            blog._id,
                            numberOfLikes ? numberOfLikes + 1 : blog.likes + 1
                          )
                        }}
                      >
                        Give it a like
                      </button>
                    </li>
                    <li>
                      Author of the blog:
                      <strong>{blog.author?.username}</strong>
                    </li>
                  </ul>
                  {authID === blog.author?._id && (
                    <button
                      id="delete-blog"
                      onClick={(e) => onDeleteBlogF(e, blog._id)}
                    >
                      Delete blog
                    </button>
                  )}
                </section>
              )}
            </section>
          ))}
        </div>
      </main>
    </div>
  )
}

BlogsContainer.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        username: PropTypes.string,
        password: PropTypes.string,
        __v: PropTypes.number
      }),
      url: PropTypes.string,
      likes: PropTypes.number,
      __v: PropTypes.number
    })
  ),
  onLikesUpdateF: PropTypes.func,
  onDeleteBlogF: PropTypes.func
}

export default BlogsContainer
