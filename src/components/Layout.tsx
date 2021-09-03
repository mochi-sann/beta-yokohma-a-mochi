import React from 'react'
import { Container } from '@chakra-ui/react'
export type Props = {
  children: React.ReactNode
}
import { NextSeo } from 'next-seo'

const Layout: React.VFC<Props> = (props) => {
  return (
    <Container maxW="900px">
      <NextSeo
        title="奴らのいる工場から脱出 | プロジェクトN"
        description="A short description goes here."
      />
      {props.children}
    </Container>
  )
}

export default Layout
