import type { Meta, StoryObj } from '@storybook/react'
import QuestionRadio from '../../components/QuestionComponents/QuestionRadio/QuestionRadio'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Question/QuestionRadio',
  component: QuestionRadio,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof QuestionRadio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const SetProps: Story = {
  args: {
    title: 'hello',
    options: [
      { value: 'v1', text: 't1' },
      { value: 'v2', text: 't2' },
      { value: 'v3', text: 't3' },
    ],
    value: 'v1',
    isVertical: true,
  },
}
