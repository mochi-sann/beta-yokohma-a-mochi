import { NextSeo } from 'next-seo'
import Head from 'next/head'
import React from 'react'
import Fotter from '~/src/components/Fotter'
import { Container, Box } from '@chakra-ui/react'

// import Header from './Header'
import ImagePath from '../lib/ImagePath'

export type Props = {
  children: React.ReactNode
}
const Layout: React.VFC<Props> = (props) => {
  return (
    <Box minHeight="100vh">
      {/* <Header /> */}

      <Container maxW="900px" minHeight="calc(100vh - 57px - 252px - 18px)">
        <Head>
          <link
            rel="shortcut icon"
            href={ImagePath('/icon.png')}
            type="image/x-icon"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={ImagePath('/apple-touch-icon.png')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={ImagePath('/favicon-32x32.png')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={ImagePath('/favicon-16x16.png')}
          />
          <link rel="manifest" href={ImagePath('/site.webmanifest')} />
          <link
            rel="mask-icon"
            href={ImagePath('/safari-pinned-tab.svg')}
            color="#000000"
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <NextSeo
          title="奴らのいる工場から脱出 | プロジェクトN"
          description="プロジェクトNで作ったサイトです"
          canonical="https://mochi-sann.github.io/beta-yokohma-a-mochi/"
          openGraph={{
            url: 'https://mochi-sann.github.io/beta-yokohma-a-mochi/',
            title: '奴らのいる工場から脱出 | プロジェクトN',
            images: [
              {
                url: 'https://mochi-sann.github.io/beta-yokohma-a-mochi/ogp/Titleimg.png',
                alt: 'タイトル画像',
              },
            ],
          }}
          twitter={{
            cardType: 'summary_large_image',
          }}
        />
        {props.children}
      </Container>

      <Fotter mt="4" />
    </Box>
  )
}

export default Layout
