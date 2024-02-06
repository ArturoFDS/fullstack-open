import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import CreateBlogForm from '../src/components/CreateBlog'

describe('CreateBlogForm', () => {
  it('submits form with correct values', () => {
    const mockCreateBlog = (e, newBlog) => {
      expect(newBlog.title).toBe('Test Blog')
      expect(newBlog.url).toBe('www.test.com')
      expect(newBlog.likes).toBe('10')
    }
    render(<CreateBlogForm onCreateBlogF={mockCreateBlog} />)
    const createButton = screen.getByText('Create new blog')
    fireEvent.click(createButton)
    const titleInput = screen.getByLabelText('Title')
    const urlInput = screen.getByLabelText('Url')
    const likesInput = screen.getByLabelText('Likes')
    fireEvent.change(titleInput, { target: { value: 'Test Blog' } })
    fireEvent.change(urlInput, { target: { value: 'www.test.com' } })
    fireEvent.change(likesInput, { target: { value: '10' } })
    const submitButton = screen.getByText('Create Blog!')
    fireEvent.click(submitButton)
  })
})
