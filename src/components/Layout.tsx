import React from 'react'
import { Container, SlideFade, Flex } from '@chakra-ui/react'
import Heder from './Heder'
export type Props = {
  children: React.ReactNode
}
import { NextSeo } from 'next-seo'
import Head from 'next/head'
const Layout: React.VFC<Props> = (props) => {
  return (
    <>
      <Heder />
      <Flex position="sticky" top="0" left="0" bg="red" height="30px"></Flex>
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
