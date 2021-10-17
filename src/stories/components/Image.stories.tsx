import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Image } from '../../components'

export default {
  title: 'Component/Image',
  component: Image,
  argTypes: {
    src: {
      defaultValue: 'https://picsum.photos/200',
    },
    placeholder: {
      defaultValue: 'https://via.placeholder.com/200',
      control: { type: 'text' },
    },
    threshold: {
      type: { name: 'number' },
      defaultValue: 0.5,
      control: { type: 'number' },
    },
    width: {
      type: { name: 'number' },
      defaultValue: 200,
      control: { type: 'range', min: 200, max: 600 },
    },
    height: {
      defaultValue: 200,
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

export const Lazy: ComponentStory<typeof Image> = (args) => {
  return (
    <div>
      {Array.from(new Array(30), (_, k) => k).map((i) => (
        <Image {...args} lazy block src={`${args.src}?${i}`} />
      ))}
    </div>
  )
}
