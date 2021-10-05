import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Box from '../components/Box'

export default {
  title: 'Example/Box',
  component: Box,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Box>

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />

export const Primary = Template.bind({})

// Primary.args = {
//   primary: true,
//   label: 'Box',
// }
