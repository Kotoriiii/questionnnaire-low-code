import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import QuestionTitle from './QuestionTitle'

test('默认属性', () => {
  render(<QuestionTitle />)
  const h = screen.getByText('一行标题')
  expect(h).toBeInTheDocument()
})

test('传入属性', () => {
  render(<QuestionTitle text="hello" level={2} isCenter={true} />)

  const h = screen.getByText('hello')
  expect(h).toBeInTheDocument()

  expect(h.matches('h2')).toBeTruthy() // <h2>

  const style = h.style
  expect(style.textAlign).toBe('center')
})
