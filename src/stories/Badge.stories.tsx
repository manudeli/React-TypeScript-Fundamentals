import { ComponentMeta, ComponentStory } from '@storybook/react'
import Badge from '../components/Badge'
import Image from '../components/Image'

export default {
  title: 'Component/Badge',
  component: Badge,
  argTypes: {
    count: {
      defaultValue: 1,
      control: { type: 'range', min: 0, max: 200 },
    },
    maxCount: { defaultValue: 100, control: 'number' },
    showZero: { defaultValue: false },
  },
} as ComponentMeta<typeof Badge>

export const Default: ComponentStory<typeof Badge> = (args) => {
  return (
    <Badge {...args}>
      <Image
        src="https://picsum.photos/60"
        alt="picture"
        width={60}
        style={{ borderRadius: 8 }}
      />
    </Badge>
  )
}

export const Dot: ComponentStory<typeof Badge> = (args) => {
  return (
    <Badge {...args} dot>
      <Image
        src="https://picsum.photos/60"
        alt="picture"
        width={60}
        style={{ borderRadius: 8 }}
      />
    </Badge>
  )
}
