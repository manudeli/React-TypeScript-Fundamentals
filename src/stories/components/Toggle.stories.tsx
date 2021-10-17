import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Toggle } from '../../components'

export default {
  title: 'Component/Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>

export const Default: ComponentStory<typeof Toggle> = (args) => {
  return (
    <>
      <Toggle {...args} on={false} />
      <Toggle {...args} on={true} />
    </>
  )
}

export const Disabled: ComponentStory<typeof Toggle> = (args) => {
  return (
    <>
      <Toggle {...args} on={false} disabled={true} />
      <Toggle {...args} on={true} disabled={true} />
    </>
  )
}
