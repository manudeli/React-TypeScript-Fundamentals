import { ComponentMeta, ComponentStory } from '@storybook/react'
import TaskList from '../components/TaskList'

export default {
  title: 'Component/TaskList',
  component: TaskList,
  argsTypes: {},
} as ComponentMeta<typeof TaskList>

export const Default: ComponentStory<typeof TaskList> = (args) => {
  return <TaskList {...args}></TaskList>
}
