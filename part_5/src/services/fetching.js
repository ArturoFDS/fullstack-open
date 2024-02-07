export async function getAllBlogs () {
  try {
    const serverResponse = await fetch('http://localhost:3000/api/blogs', {
      credentials: 'include'
    })
    if (serverResponse.ok) {
      const response = await serverResponse.json()
      return response.data
    }
    if (!serverResponse.ok) {
      throw new Error(serverResponse.status)
    }
  } catch (error) {
    console.error(error)
  }
}

export async function LoginUser (data) {
  try {
    const serverResponse = await fetch(
      'http://localhost:3000/api/users/login',
      {
        body: JSON.stringify(data),
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    if (serverResponse.ok) {
      return serverResponse
    }
    if (!serverResponse.ok) {
      throw new Error(serverResponse.status)
    }
  } catch (error) {
    console.error(error)
  }
}

export async function createBlog (data) {
  try {
    const serverResponse = await fetch(
      'http://localhost:3000/api/blogs/create',
      {
        body: JSON.stringify(data),
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    if (serverResponse.ok) {
      return serverResponse
    }
    if (!serverResponse.ok) {
      throw new Error(serverResponse.status)
    }
  } catch (error) {
    console.error(error)
  }
}

export async function updateLikes (id, data) {
  try {
    const serverResponse = await fetch(
      `http://localhost:3000/api/blogs/update/${id}`,
      {
        body: JSON.stringify({ likes: data }),
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    if (serverResponse.ok) {
      return serverResponse
    }

    if (!serverResponse.ok) {
      throw new Error(serverResponse.status)
    }
  } catch (error) {
    console.error(error)
  }
}

export async function deleteBlog (id) {
  try {
    const serverResponse = await fetch(
      `http://localhost:3000/api/blogs/delete/${id}`,
      {
        method: 'DELETE',
        credentials: 'include'
      }
    )
    if (serverResponse.ok) {
      return serverResponse
    }
    if (!serverResponse.ok) {
      throw new Error(serverResponse.status)
    }
  } catch (error) {
    console.error(error)
  }
}
