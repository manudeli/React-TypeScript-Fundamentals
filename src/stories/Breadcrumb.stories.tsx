import { ComponentMeta, ComponentStory } from '@storybook/react'
import Breadcrumb from '../components/Breadcrumb'

export default {
  title: 'Component/Breadcrumb',
  component: Breadcrumb,
  argTypes: {},
} as ComponentMeta<typeof Breadcrumb>

export const Default: ComponentStory<typeof Breadcrumb> = (args) => {
  return (
    <Breadcrumb {...args}>
      <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/level1">Level 1</Breadcrumb.Item>
      <Breadcrumb.Item href="/level2">Level 2</Breadcrumb.Item>
    </Breadcrumb>
  )
}
