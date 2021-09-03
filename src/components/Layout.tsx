import React from 'react'
import { Container } from '@chakra-ui/react'
export type Props = {
  children: React.ReactNode
}

const Layout: React.VFC<Props> = (props) => {
  return <Container maxW="900px">{props.children}</Container>
}

export default Layout
