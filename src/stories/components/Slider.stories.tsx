import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Icon, Slider, Spacer } from '../../components'

export default {
  title: 'Component/Slider',
  component: Slider,
  argTypes: {
    defaultValue: { defaultValue: 1, control: 'number' },
    min: { defaultValue: 1, control: 'number' },
    max: { defaultValue: 100, control: 'number' },
    step: { defaultValue: 0.1, control: 'number' },
    onChange: { action: 'onChange' },
  },
} as ComponentMeta<typeof Slider>

export const Default: ComponentStory<typeof Slider> = (args) => {
  return <Slider {...args} />
}

export const VolumeControl: ComponentStory<typeof Slider> = (args) => {
  return (
    <Spacer>
      <Icon name="volume" />
      <Slider style={{ width: 100, display: 'inline-block' }} {...args} />
      <Icon name="volume-2" />
    </Spacer>
  )
}
