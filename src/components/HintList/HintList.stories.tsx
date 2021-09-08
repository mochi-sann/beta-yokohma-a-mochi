import { Meta, Story } from '@storybook/react'
import React from 'react'

import HintList, { Props } from './HintList'

export default {
  title: 'coponent/HintList',
  component: HintList,
  argTypes: {},
} as Meta

const Template: Story<Props> = (args) => <HintList {...args} />

export const Default = Template.bind({})
Default.args = {}
