import { Meta, Story } from '@storybook/react'
import React from 'react'

import Problems, { Props } from './Problems'

export default {
  title: 'coponent/Problems',
  component: Problems,
  argTypes: {},
} as Meta

const Template: Story<Props> = (args) => <Problems {...args} />

export const Default = Template.bind({})
Default.args = {
  correctList: ['hoge', 'fuga'],
}
