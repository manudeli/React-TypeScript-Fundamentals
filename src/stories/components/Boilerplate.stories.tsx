import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Boilerplate } from '../../components'

export default {
  title: 'Component/Boilerplate',
  component: Boilerplate,
  argTypes: {},
} as ComponentMeta<typeof Boilerplate>

export const Default: ComponentStory<typeof Boilerplate> = (args) => {
  return <Boilerplate {...args}></Boilerplate>
}
