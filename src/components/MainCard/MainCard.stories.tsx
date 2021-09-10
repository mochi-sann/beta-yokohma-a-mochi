import { Meta, Story } from '@storybook/react'
import React from 'react'

import MainCard, { Props } from './MainCard'

export default {
  title: 'coponent/MainCard',
  component: MainCard,
  argTypes: {},
} as Meta

const Template: Story<Props> = (args) => <MainCard {...args} />

export const Default = Template.bind({})
Default.args = {}
