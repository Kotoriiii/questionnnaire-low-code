import type { Meta, StoryObj } from '@storybook/react'
import QuestionParagraph from '../../components/QuestionComponents/QuestionParagraph/QuestionParagraph'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Question/QuestionParagraph',
  component: QuestionParagraph,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof QuestionParagraph>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const SetProps: Story = {
  args: {
    text: 'hello',
    isCenter: true,
  },
}

export const BreakLine: Story = {
  args: {
    text: 'hello\nhello\nhello',
  },
}
