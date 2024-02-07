import { describe, it, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import BlogsContainer from '../src/components/Blogs'

describe('BlogsContainer', () => {
  const mockBlogs = [
    {
      _id: '1',
      title: 'Test Blog 1',
      author: {
        _id: 'author1',
        username: 'test_author'
      },
      url: 'www.testblog1.com',
      likes: 10
    },
    {
      _id: '2',
      title: 'Test Blog 2',
      author: {
        _id: 'author2',
        username: 'another_author'
      },
      url: 'www.testblog2.com',
      likes: 15
    }
  ]
  it('It should not find the URL, LIKES or AUTHOR before the user clicks Show Data', async () => {
    render(<BlogsContainer blogs={mockBlogs} />)

    expect(() => {
      screen.getByText('author1')
    }).toThrowError()

    expect(() => {
      screen.getByText('www.testblog1.com')
    }).toThrowError()

    expect(() => {
      screen.getByText(10)
    }).toThrowError()
  })

  it('Should show the likes, url and author after the show details button is clicked', async () => {
    const { container } = render(<BlogsContainer blogs={mockBlogs} />)

    const showDetailsButton = container.querySelectorAll('#show-details')
    fireEvent.click(showDetailsButton[0])

    const authorText = await screen.findByText('test_author')
    const urlText = await screen.findByText('www.testblog1.com')
    const likesText = await screen.findByText(10)
    expect(authorText).toContain(authorText)
    expect(likesText).toContain(likesText)
    expect(urlText).toContain(urlText)
  })
})
