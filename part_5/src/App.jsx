/* eslint-disable new-cap */
import { useState, useEffect } from 'react'
import {
  LoginUser,
  createBlog,
  deleteBlog,
  getAllBlogs,
  updateLikes
} from './services/fetching'

import useLocalStorage from '../hooks/useLocalStorageHook'
import BlogsContainer from './components/Blogs'
import LoginForm from './components/LoginForm'
import CreateBlogForm from './components/CreateBlog'
import NotificationModel from '../utils/Notifications'
const App = () => {
  const localStorage = new useLocalStorage()
  const [blogs, setBlogs] = useState({
    blogs: '',
    authID: ''
  })
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    isLogged: false
  })
  const [useNotification, setUseNotification] = useState({
    message: '',
    type: ''
  })

  const fetchBlogs = async () => {
    const response = await getAllBlogs()
    const moreLikestoLessLikes = response.blogs.sort((b, a) => b.likes - a.likes)
    setBlogs({
      blogs: moreLikestoLessLikes,
      authID: response.userID
    })
  }

  const handleOnChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })
  }

  const handleOnUserLogin = async (event) => {
    event.preventDefault()
    const response = await LoginUser(userData)
    if (response?.ok) {
      setUserData({
        ...userData,
        isLogged: true
      })
      const dataForLocalStorage = {
        username: userData.username,
        isLogged: true
      }
      localStorage.setLocalStorage('isLogged', dataForLocalStorage)
      await fetchBlogs()
    }
    if (!response?.ok) {
      console.log(response)
      setUseNotification({
        message: 'Username or password is wrong',
        type: 'warning'
      })
      setTimeout(() => {
        setUseNotification({
          message: '',
          type: ''
        })
      }, 5000)
    }
  }

  const handleOnDeleteBlogs = async (event, id) => {
    event.preventDefault()
    await deleteBlog(id)
    await fetchBlogs()
  }

  const handleLogout = (event) => {
    event.preventDefault()
    setUserData({ isLogged: false })
    localStorage.removeLocalStorage('isLogged')
  }

  const handleOnClickBlogCreate = async (e, data) => {
    e.preventDefault()
    const response = await createBlog(data)
    console.log(response)
    if (response.ok) {
      await fetchBlogs()
      setUseNotification({
        message: `Blog ${data.title} successfully created by ${userData.username}`,
        type: 'success'
      })
      setTimeout(() => {
        setUseNotification({
          message: '',
          type: ''
        })
      }, 5000)
    } else {
      setUseNotification({
        message: 'Something went wrong!',
        type: 'error'
      })
      setTimeout(() => {
        setUseNotification({
          message: '',
          type: ''
        })
      }, 5000)
    }
  }

  const handleOnClickLikesUpdate = async (event, id, likes) => {
    event.preventDefault()
    const response = await updateLikes(id, likes)
    console.log(response)
    if (response?.ok) {
      console.log(response)
    }
  }

  useEffect(() => {
    const confirmIsLogged = async () => {
      const setIsLogged = localStorage.getLocalStorage('isLogged')
      if (setIsLogged) {
        setUserData(JSON.parse(setIsLogged))
        await fetchBlogs()
      } else {
        setUserData({
          isLogged: userData.isLogged
        })
      }
    }
    confirmIsLogged()
  }, [])

  return (
    <div>
      <header>
        <h1>Blogs Frontend</h1>
        {userData.isLogged && userData.username && (
          <span>Logged in as {userData.username}</span>
        )}
        .
      </header>
      <main>
        {!userData.isLogged && (
          <LoginForm
            FOnSubmit={handleOnUserLogin}
            FOnChange={handleOnChange}
            value={userData}
          />
        )}
        <section>
          {useNotification.message && useNotification.type && (
            <NotificationModel
              message={useNotification.message}
              type={useNotification.type}
            />
          )}
        </section>
        {blogs.blogs && blogs.authID && userData.isLogged && userData.username && (
          <div>
            <CreateBlogForm onCreateBlogF={handleOnClickBlogCreate} on />
            <BlogsContainer
              blogs={blogs.blogs}
              authID={blogs.authID}
              onDeleteBlogF={handleOnDeleteBlogs}
              onLikesUpdateF={handleOnClickLikesUpdate}
            />
          </div>
        )}
      </main>
      <footer>
        {userData.isLogged && userData.username && (
          <button onClick={(e) => handleLogout(e)}>Logout</button>
        )}
      </footer>
    </div>
  )
}

export default App
