import { ComponentMeta, ComponentStory } from '@storybook/react'
import Image from '../components/Image'

export default {
  title: 'Component/Image',
  component: Image,
  argTypes: {
    src: {
      defaultValue: 'https://picsum.photos/200',
    },
    width: {
      type: { name: 'number' },
      defaultValue: 200,
      control: { type: 'range', min: 200, max: 600 },
    },
    height: {
      type: { name: 'number' },
    },
    alt: {
      name: 'alt',
      control: 'string',
    },
    mode: {
      control: { type: 'inline-radio' },
    },
  },
} as ComponentMeta<typeof Image>

export const Default: ComponentStory<typeof Image> = (args) => {
  return (
    <>
      <Image {...args}></Image>
      <Image {...args}></Image>
    </>
  )
}
