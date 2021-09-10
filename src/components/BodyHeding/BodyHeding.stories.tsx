import { Meta, Story } from '@storybook/react'
import React from 'react'

import BodyHeding, { Props } from './BodyHeding'

export default {
  title: 'coponent/BodyHeding',
  component: BodyHeding,
  argTypes: {},
} as Meta

const Template: Story<Props> = (args) => <BodyHeding {...args} />

export const Default = Template.bind({})
Default.args = {}
