import React from 'react'
import { Container } from '@chakra-ui/react'
export type Props = {
  children: React.ReactNode
}
import { NextSeo } from 'next-seo'
import Head from 'next/head'
const Layout: React.VFC<Props> = (props) => {
  return (
    <Container maxW="900px">
      <Head>
        <link
          rel="shortcut icon"
          href="https://mochi-sann.github.io/beta-yokohma-a-mochi/icon.png"
          type="image/x-icon"
        />
      </Head>
      <NextSeo
        title="奴らのいる工場から脱出 | プロジェクトN"
        description="A short description goes here."
      />
      {props.children}
    </Container>
  )
}

export default Layout
