import Input from '../components/Input'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Component/Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>

export const Default: ComponentStory<typeof Input> = (args) => {
  return <Input {...args} />
}
