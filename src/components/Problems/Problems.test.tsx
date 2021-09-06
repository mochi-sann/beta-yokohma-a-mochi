import { render } from '@testing-library/react'
import React from 'react'
import Problems, { Props } from './Problems'

describe('Problems', () => {
  const defaultProps: Props = {}

  it('should render', () => {
    const props = { ...defaultProps }
    const { asFragment, queryByText } = render(<Problems {...props} />)

    expect(asFragment()).toMatchSnapshot()
    expect(queryByText('Problems')).toBeTruthy()
  })
})
