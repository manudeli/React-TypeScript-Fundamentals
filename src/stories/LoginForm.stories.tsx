import LoginForm from '../components/LoginForm'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Component/LoginForm',
  component: LoginForm,
  argTypes: {},
} as ComponentMeta<typeof LoginForm>

export const Default: ComponentStory<typeof LoginForm> = (args) => {
  return <LoginForm {...args} />
}
