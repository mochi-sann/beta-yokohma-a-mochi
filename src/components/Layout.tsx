import { NextSeo } from 'next-seo'
import Head from 'next/head'
import React from 'react'

import { Container, SlideFade } from '@chakra-ui/react'

import Header from './Header'

export type Props = {
  children: React.ReactNode
}
const Layout: React.VFC<Props> = (props) => {
  return (
    <>
      <Header />

      <SlideFade in offsetY="20px">
        <Container maxW="900px">
          <Head>
            <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
          </Head>
          <NextSeo
            title="奴らのいる工場から脱出 | プロジェクトN"
            description="A short description goes here."
          />
          {props.children}
        </Container>
      </SlideFade>
    </>
  )
}

export default Layout
