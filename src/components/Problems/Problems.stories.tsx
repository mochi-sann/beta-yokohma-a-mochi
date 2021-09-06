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
  Done: () => console.log('Done'),
  correctList: [
    {
      correct: 'せいかいせいかい',
      type: 'text',
      title: 'タイトルタイトル',
    },
    {
      correct: 'せいかいせいかい',
      type: 'text',
      title: 'タイトルタイトル',
    },
    {
      correct: 'せいかいせいかい',
      type: 'text',
      title: 'タイトルタイトル',
    },
  ],
}
