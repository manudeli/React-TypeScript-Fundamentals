import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Spinner } from '../../components'

export default {
  title: 'Component/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: { type: 'range', min: 24, max: 200 },
    },
  },
} as ComponentMeta<typeof Spinner>

export const Default: ComponentStory<typeof Spinner> = (args) => {
  return <Spinner {...args} />
}
