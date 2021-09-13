/**
 * @jest-environment jsdom
 */

import React from 'react'

import { render, screen, fireEvent, waitFor } from '@testing-library/react'

import IndexPage from './index'

describe('when the logo is clicked', () => {
  it('should navigate to the home section', async () => {
    render(<IndexPage />)
    const link = screen.getByRole('link', { name: /talles corradini/i })
    const section = screen.getByTestId('home')

    fireEvent.click(link)
    await waitFor(() => {
      expect(section).toHaveAttribute('id', '#home')
      expect(location.hash).toBe('#home')
    })
  })
})

describe('when navigation home link is clicked', () => {
  it('should navigate to home section', async () => {
    render(<IndexPage />)
    const link = screen.getByRole('link', { name: /home/i })
    const section = screen.getByTestId('home')

    fireEvent.click(link)
    await waitFor(() => {
      expect(section).toHaveAttribute('id', '#home')
      expect(location.hash).toBe('#home')
    })
  })
})

describe('when navigation projects link is clicked', () => {
  it('should navigate to projects section', async () => {
    render(<IndexPage />)
    const link = screen.getByText('projects')
    const section = screen.getByTestId('projects')

    expect(section).toHaveAttribute('id', '#projects')
    fireEvent.click(link)

    await waitFor(() => {
      expect(location.hash).toBe('#projects')
    })
  })
})

describe('when navigate contact link is clicked', () => {
  it('should navigate to contact section', async () => {
    render(<IndexPage />)
    const link = screen.getByRole('link', { name: /contact/i })
    const section = screen.getByTestId('contact')

    fireEvent.click(link)
    await waitFor(() => {
      expect(section).toHaveAttribute('id', '#contact')
      expect(location.hash).toBe('#contact')
    })
  })
})

describe('when home section project button is clicked', () => {
  it('should navigate to project section', () => {
    render(<IndexPage />)
    const link = screen.getByRole('link', { name: /see projects/i })
    const section = screen.getByTestId('contact')

    fireEvent.click(link)
    await waitFor(() => {
      expect(section).toHaveAttribute('id', '#contact')
      expect(location.hash).toBe('#contact')
    })
  })
})

describe('when home section download CV button is clicked', () => {
  it.todo('should download a CV')
})

describe('the featured projects section', () => {
  it.todo('should contain least 3 projects')
})

describe('the project article', () => {
  it.todo('should contain a title')
  it.todo('should contain the tecnologies used in the project')
  it.todo('should contain a brief description of the project')
  it.todo('should contain a link to the project page')
  it.todo('should contain a link to a live version of the project')
  it.todo('should contain a link to the project source')
})

describe('accessiblity checks', () => {
  test('page contains a header', () => {
    const { container } = render(<IndexPage />)
    const header = container.querySelector('header')
    expect(header).toBeInTheDocument()
  })

  test('header contains a navigation bar', () => {
    const { container } = render(<IndexPage />)
    const header = container.querySelector('header')
    const navigation = header.querySelector('nav')
    expect(navigation).toBeInTheDocument()
  })

  test.todo('logo matches the link role')

  test.todo('navigation bar buttons match the link role')

  test('page contains a main section', () => {
    const { container } = render(<IndexPage />)
    const mainSection = container.querySelector('main')
    expect(mainSection).toBeInTheDocument()
  })

  test.todo('page contains a footer')
})

describe('UX checks', () => {
  test.todo('navigation links are highlighted when active')
})
