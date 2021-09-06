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
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <link
              rel="mask-icon"
              href="/safari-pinned-tab.svg"
              color="#000000"
            />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff" />
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
