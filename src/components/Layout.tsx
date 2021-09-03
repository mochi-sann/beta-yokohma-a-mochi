import React from 'react'

export type Props = {
  children: React.ReactNode
}

const Layout: React.VFC<Props> = (props) => {
  return <>{props.children}</>
}

export default Layout
