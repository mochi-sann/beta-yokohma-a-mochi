import { Text } from '@chakra-ui/layout'
import React from 'react'

import StageClearNextPageButton from '~/src/components/stageClearNextPageButton'

export const Home: React.VFC = () => {
  return (
    <div>
      <Text>
        STAGE：2 クリア！ 答えは、「納豆菌」 <br />
        納豆菌とは、枯草菌（こそうきん）という細菌の一種で、納豆をつくるのに欠かせないもの。納豆菌は身近な田んぼや畑、枯れ草に存在し、とりわけ稲わらに多く生息しています。煮大豆に納豆菌を加えると、発酵の過程でたんぱく質を分解しておいしさの成分アミノ酸を生成し、納豆ができます。加える納豆菌の種類によって、ネバネバ具合や味、においなど仕上がる納豆の特性が変わります。
      </Text>

      <StageClearNextPageButton Nextpath="/page3" />
    </div>
  )
}

export default Home
