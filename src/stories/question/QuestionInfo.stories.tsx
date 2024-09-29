import type { Meta, StoryObj } from '@storybook/react'
import QuestionInfo from '../../components/QuestionComponents/QuestionInfo/QuestionInfo'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Question/QuestionInfo',
  component: QuestionInfo,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof QuestionInfo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const SetProps: Story = {
  args: {
    title: 'hello',
    desc: 'world',
  },
}

export const DescBreakLine: Story = {
  args: {
    title: 'hello',
    desc: 'a\nb\nc',
  },
}
