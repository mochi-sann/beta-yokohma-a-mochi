import { Img } from '@chakra-ui/image'
import { Box, Text } from '@chakra-ui/layout'
import { Heading } from '@chakra-ui/react'
import React from 'react'

import StageClearNextPageButton from '~/src/components/stageClearNextPageButton'
import ImagePath from '~/src/lib/ImagePath'

export const Home: React.VFC = () => {
  return (
    <div>
      <Box py="4">
        <Text>
          STAGE:1 クリア! 答えは「うま」 <br />
          馬の餌(えさ)にしていた煮豆(にまめ)をわらで包ん(つつん)で持ち歩い(もちあるい)ていたら、温まっ(あたたまっ)て発酵(はっこう)し、糸を引いていました。試しに(ためしに)食べてみたら美味しかっ(おいしかっ)たため、納豆(なっとう)ができたと言われています。
          工場の地図を手に入れることができた！
          工場を出るには、全て(すべて)のルートを通らなくてはいけない！
          急い(いそい)で出口に向かお(むかお)う！
        </Text>
        <Heading>工場の地図</Heading>
        <Img src={ImagePath('/StageAssets/image2.png')} />
      </Box>
      <StageClearNextPageButton Nextpath="/page2" />
    </div>
  )
}

export default Home
