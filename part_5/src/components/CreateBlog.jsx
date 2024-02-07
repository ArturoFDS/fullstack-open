import { useState } from 'react'

const CreateBlogForm = ({ onCreateBlogF }) => {
  const [isShow, setIsShow] = useState(false)
  const [newBlog, setNewBlog] = useState({
    title: '',
    url: '',
    likes: ''
  })
  const handleOnClick = (event) => {
    event.preventDefault()
    setIsShow(!isShow)
  }

  const handleOnChange = (event) => {
    setNewBlog({
      ...newBlog,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div>
      {!isShow && (
        <button onClick={(e) => handleOnClick(e)}>Create new blog</button>
      )}

      {isShow && (
        <div>
          <form
            onSubmit={(e) => {
              onCreateBlogF(e, newBlog)
              setNewBlog({
                title: '',
                url: '',
                likes: ''
              })
              setIsShow(!isShow)
            }}
          >
            <section>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title" // Added id for association
                autoComplete="off"
                onChange={(e) => handleOnChange(e)}
                value={newBlog.title}
                placeholder="Why Java is a bad language?"
              />
            </section>
            <section>
              <label htmlFor="url">Url</label>
              <input
                type="text"
                name="url"
                id="url" // Added id for association
                autoComplete="off"
                onChange={(e) => handleOnChange(e)}
                value={newBlog.url}
                placeholder="www.example.com"
              />
            </section>
            <section>
              <label htmlFor="likes">Likes</label>
              <input
                type="number"
                name="likes"
                id="likes" // Added id for association
                autoComplete="off"
                onChange={(e) => handleOnChange(e)}
                value={newBlog.likes}
              />
            </section>
            <button type="submit">Create Blog!</button>
            <button onClick={(e) => handleOnClick(e)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default CreateBlogForm
