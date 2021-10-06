import { ComponentMeta, ComponentStory } from '@storybook/react'
import Text from '../components/Text'

export default {
  title: 'Component/Text',
  component: Text,
  argTypes: {
    size: {
      options: [8, 16, 32, 'small', 'normal', 'large'],
    },
  },
} as ComponentMeta<typeof Text>

export const Default: ComponentStory<typeof Text> = (args) => {
  return (
    <>
      <Text {...args}>Text</Text>
      <Text {...args}>Text</Text>
    </>
  )
}

export const Size: ComponentStory<typeof Text> = (args) => {
  return (
    <>
      <Text {...args} size="large">
        Large
      </Text>
      <Text {...args} size="normal">
        Normal
      </Text>
      <Text {...args} size="small">
        Small
      </Text>
      <Text {...args} size={20}>
        Custom
      </Text>
    </>
  )
}
