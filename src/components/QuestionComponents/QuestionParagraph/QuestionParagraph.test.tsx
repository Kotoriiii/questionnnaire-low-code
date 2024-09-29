import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import QuestionParagraph from './QuestionParagraph'

test('默认属性', () => {
  render(<QuestionParagraph />)
  const span = screen.getByText('一行段落')
  expect(span).toBeInTheDocument()
})

test('传入属性', () => {
  render(<QuestionParagraph text="hello" isCenter={true} />)

  const span = screen.getByText('hello')
  expect(span).toBeInTheDocument()

  const p = span.parentElement // 父元素
  expect(p).not.toBeNull()

  const style = p!.style || {}
  expect(style.textAlign).toBe('center')
})

test('多行文字', () => {
  render(<QuestionParagraph text={'a\nb\nc'} />)

  const span = screen.getByText('a')
  expect(span).toBeInTheDocument()

  expect(span).toHaveTextContent('a')
  expect(span).not.toHaveTextContent('ab') // 被换行了
})
