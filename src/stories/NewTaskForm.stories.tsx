import { ComponentMeta, ComponentStory } from '@storybook/react'
import NewTaskForm from '../components/NewTaskForm'

export default {
  title: 'Component/NewTaskForm',
  component: NewTaskForm,
  argsTypes: {},
} as ComponentMeta<typeof NewTaskForm>

export const Default: ComponentStory<typeof NewTaskForm> = (args) => {
  return <NewTaskForm {...args}></NewTaskForm>
}
