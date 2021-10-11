import { ComponentMeta, ComponentStory } from '@storybook/react'
import Task from '../components/Task'

export default {
  title: 'Component/Task',
  component: Task,
  argTypes: {},
} as ComponentMeta<typeof Task>

export const Default: ComponentStory<typeof Task> = () => {
  const task = {
    content: '출근하기',
    complete: false,
  }

  return <Task {...task} />
}
