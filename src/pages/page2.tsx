import { Text } from '@chakra-ui/layout'
import React from 'react'
import Problems from '~/src/components/Problems/Problems'
import CurrentLocationMap from '../components/CurrentLocationMap'

export const Home: React.VFC = () => {
  return (
    <div>
      <Text>
        STAGE:2 ドアの鍵を開けよう
        次の部屋に行く前に、パスワードを入れないと開かないドアがある!
        ドアを開け、出口に向かおう!
        下の画像の謎を解き、鍵のパスワードをキーワード欄に入力しよう。
        困ったときは、ヒントがある。なるべく見ないようにゲームを進めていこう。
      </Text>{' '}
      <CurrentLocationMap img="/StageAssets/mapList/無題のプレゼンテーション_page-0002.jpg" />
      <Problems
        nextPage="/stage_clear/2"
        correctList={[
          {
            title: 'パスワード',
            correctText: '納豆菌',
            type: 'text',
          },
        ]}
      />
    </div>
  )
}

export default Home
