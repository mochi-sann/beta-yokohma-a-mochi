import { Text } from '@chakra-ui/layout'
import React from 'react'
import Problems from '~/src/components/Problems/Problems'
import CurrentLocationMap from '../components/CurrentLocationMap'
import HintList from '~/src/components/HintList'
import PloblempageImg from '../components/PloblempageImg'
export const Home: React.VFC = () => {
  return (
    <div>
      <Text>
        STAGE:2 ドアの鍵を開けよう
        次の部屋に行く前に、パスワードを入れないと開かないドアがある！
        ドアを開け、出口に向かおう！
        下の画像の謎を解き、鍵のパスワードをキーワード欄に入力しよう。
        困ったときは、ヒントがある。なるべく見ないようにゲームを進めていこう。
      </Text>{' '}
      <PloblempageImg img="/StageAssets/stage2/image12.png" />
      <PloblempageImg img="/StageAssets/stage2/image19.png" />
      <CurrentLocationMap img="/StageAssets/mapList/無題のプレゼンテーション_page-0002.jpg" />
      <Problems
        nextPage="/stage_clear/2"
        correctList={[
          {
            title: '漢字で入力してください',
            correctText: '納豆菌',
            type: 'text',
          },
        ]}
      />
      <HintList
        HintLists={[
          {
            title: 'ヒント1',
            body: '国②の謎は時計回りを意識してみよう',
          },
          {
            title: 'ヒント2',
            body: '納豆に関係しているよ',
          },
        ]}
      />
    </div>
  )
}

export default Home
