import type { Meta, StoryObj } from '@storybook/react'
import QuestionCheckbox from '../../components/QuestionComponents/QuestionCheckbox/QuestionCheckbox'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Question/QuestionCheckbox',
  component: QuestionCheckbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof QuestionCheckbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const SetProps: Story = {
  args: {
    title: 'hello',
    list: [
      { value: 'v1', text: 't1', checked: false },
      { value: 'v2', text: 't2', checked: true },
      { value: 'v3', text: 't3', checked: true },
    ],
    isVertical: true,
  },
}
