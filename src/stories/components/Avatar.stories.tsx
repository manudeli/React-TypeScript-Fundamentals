import { ComponentMeta, ComponentStory } from '@storybook/react'
import Avatar from '../../components/Avatar'

export default {
  title: 'Component/Avatar',
  component: Avatar,
  argTypes: {
    src: { defaultValue: 'https://picsum.photos/200' },
    shape: {
      defaultValue: 'circle',
      control: 'inline-radio',
    },
    size: {
      defaultValue: 70,
      control: { type: 'range', min: 40, max: 200 },
    },
    mode: {
      defaultValue: 'cover',
      control: 'inline-radio',
    },
  },
} as ComponentMeta<typeof Avatar>

export const Default: ComponentStory<typeof Avatar> = (args) => {
  return <Avatar {...args}></Avatar>
}

export const Group: ComponentStory<typeof Avatar> = (args) => {
  return (
    <Avatar.Group size={40}>
      <Avatar src="https://picsum.photos/200?1" />
      <Avatar src="https://picsum.photos/200?2" />
      <Avatar src="https://picsum.photos/200?3" />
      <Avatar src="https://picsum.photos/200?4" />
    </Avatar.Group>
  )
}
