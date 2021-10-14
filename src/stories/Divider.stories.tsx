import { ComponentMeta, ComponentStory } from '@storybook/react'
import Divider from '../components/Divider'
import Text from '../components/Text'

export default {
  title: 'Component/Divider',
  component: Divider,
  argTypes: {},
} as ComponentMeta<typeof Divider>

export const Horizontal: ComponentStory<typeof Divider> = (args) => {
  return (
    <>
      <Text>위</Text>
      <Divider {...args} type="horizontal" />
      <Text>중간</Text>
      <Divider {...args} type="horizontal" />
      <Text>아래</Text>
    </>
  )
}

export const Vertical: ComponentStory<typeof Divider> = (args) => {
  return (
    <>
      <Text>왼쪽</Text>
      <Divider {...args} type="vertical" />
      <Text>중간</Text>
      <Divider {...args} type="vertical" />
      <Text>오른쪽</Text>
    </>
  )
}
