import { Text } from '@chakra-ui/layout'
import React from 'react'

import StageClearNextPageButton from '~/src/components/stageClearNextPageButton'

export const Home: React.VFC = () => {
  return (
    <div>
      <Text>
        STAGE：2 クリア！ 答えは、「納豆菌(なっとうきん)」 <br />
        納豆菌(なっとうきん)とは、枯草菌（こそうきん）という細菌(さいきん)の一種(いっしゅ)で、納豆(なっとう)をつくるのに欠かせない(かかせない)もの。納豆菌(なっとうきん)は身近(みぢか)な田んぼや畑(はたけ)、枯れ草(かれくさ)に存在(そんざい)し、とりわけ稲(いね)わらに多く生息(せいそく)しています。煮(に)大豆(だいず)に納豆菌(なっとうきん)を加える(くわえる)と、発酵(はっこう)の過程(かてい)でたんぱく質(たんぱくしつ)を分解(ぶんかい)しておいしさの成分(せいぶん)アミノ酸(あみのさん)を生成し(うみなし)、納豆(なっとう)ができます。加える(くわえる)納豆菌(なっとうきん)の種類(しゅるい)によって、ネバネバ具合(ぐあい)や味(あじ)、においなど仕上がる(しあがる)納豆(なっとう)の特性(とくせい)が変わり(かわり)ます。
      </Text>
      <Text>
        ドアが空いた！
        納豆(なっとう)たちに追いつか(おいつか)れないよう、出口に向かお(むかお)う。
      </Text>

      <StageClearNextPageButton Nextpath="/page3" />
    </div>
  )
}

export default Home
