import { ComponentMeta, ComponentStory } from '@storybook/react'
import Header from '../components/Header'
import Tab from '../components/Tab'

export default {
  title: 'Component/Tab',
  component: Tab,
  argTypes: {},
} as ComponentMeta<typeof Tab>

export const Default: ComponentStory<typeof Tab> = (args) => {
  return (
    <Tab>
      <Tab.Item title="Item 1" index="item1">
        Content 1
      </Tab.Item>
      <Tab.Item title="Item 2" index="item2">
        Content 2
      </Tab.Item>
      <Tab.Item title="Item 3" index="item3">
        <Header>Header</Header>
      </Tab.Item>
    </Tab>
  )
}
