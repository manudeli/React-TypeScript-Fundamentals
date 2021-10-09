import { ComponentMeta, ComponentStory } from '@storybook/react'
import Header from '../components/Header'

export default {
  title: 'Component/Header',
  component: Header,
  argsTypes: {
    level: {
      control: {
        type: 'range',
        min: 1,
        max: 6,
      },
    },
  },
} as ComponentMeta<typeof Header>

export const Default: ComponentStory<typeof Header> = (args) => {
  return <Header {...args}>Header</Header>
}
