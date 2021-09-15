import { Img } from '@chakra-ui/image'
import { Box, Text } from '@chakra-ui/layout'
import { Heading } from '@chakra-ui/react'
import React from 'react'

import StageClearNextPageButton from '~/src/components/stageClearNextPageButton'

export const Home: React.VFC = () => {
  return (
    <div>
      <Box py="4">
        <Text>
          STAGE:1 クリア! 答えは「うま」 <br />
          馬の餌にしていた煮豆を藁で包んで持ち歩いていたら、温まって発酵し、糸を引いていました。試{' '}
          <br />
          しに食べてみたら美味しかったため、 工場の地図を手に入れることができた!{' '}
          <br />
          出口に向かおう!
        </Text>
        <Heading>工場の地図</Heading>
        <Img src={process.env.BASE_PATH + '/StageAssets/image2.png'} />
      </Box>
      <StageClearNextPageButton Nextpath="/page2" />
    </div>
  )
}

export default Home
