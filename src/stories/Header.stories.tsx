import { ComponentMeta, ComponentStory } from '@storybook/react'
import Header from '../components/Header'

export default {
  title: 'Component/Header',
  component: Header,
  argTypes: {
    level: { control: { type: 'inline-radio' } },
  },
} as ComponentMeta<typeof Header>

export const Default: ComponentStory<typeof Header> = (args) => {
  return <Header {...args}>Header</Header>
}
