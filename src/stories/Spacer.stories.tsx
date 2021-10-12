import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CSSProperties } from 'react'
import Spacer from '../components/Spacer'

export default {
  title: 'Component/Spacer',
  component: Spacer,
  argTypes: {
    type: { control: { type: 'inline-radio' } },
    size: {
      defaultValue: 8,
      control: { type: 'range', min: 8, max: 64 },
    },
  },
} as ComponentMeta<typeof Spacer>

interface BoxProps {
  block?: boolean
  style?: CSSProperties
}

const Box = ({ block, style }: BoxProps) => {
  return (
    <div
      style={{
        display: block ? 'block' : 'inline-block',
        width: 100,
        height: 100,
        backgroundColor: 'blueviolet',
        ...style,
      }}
    />
  )
}

export const Horizontal: ComponentStory<typeof Spacer> = (args) => {
  return (
    <Spacer {...args} type="horizontal">
      <Box />
      <Box />
      <Box />
    </Spacer>
  )
}

export const Vertical: ComponentStory<typeof Spacer> = (args) => {
  return (
    <Spacer {...args} type="vertical">
      <Box block />
      <Box block />
      <Box block />
    </Spacer>
  )
}
