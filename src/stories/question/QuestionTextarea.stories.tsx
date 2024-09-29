import type { Meta, StoryObj } from '@storybook/react'
import QuestionTextarea from '../../components/QuestionComponents/QuestionTextarea/QuestionTextarea'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Question/QuestionTextarea',
  component: QuestionTextarea,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof QuestionTextarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const SetProps: Story = {
  args: {
    title: 'Custom title',
    placeholder: 'Type here...',
  },
}
