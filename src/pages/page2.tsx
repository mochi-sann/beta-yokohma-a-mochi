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
        STAGE:2 ドアの鍵(かぎ)を開けよ(あけよ)う
        次(つぎ)の部屋(へや)に行く前に、パスワードを入れないと開か(ひらか)ないドアがある！
        ドアを開け(ひらけ)、出口に向かお(むかお)う！
        下の画像(がぞう)の謎(なぞ)を解き(とき)、鍵(かぎ)のパスワードをキーワード欄(らん)に入力しよう。
        困っ(こまっ)たときは、ヒントがある。なるべく見ないようにゲームを進め(すすめ)ていこう。
      </Text>{' '}
      <PloblempageImg img="/StageAssets/stage2/image12.png" />
      <PloblempageImg img="/StageAssets/stage2/image19.png" />
      <CurrentLocationMap img="/StageAssets/mapList/無題のプレゼンテーション_page-0002.jpg" />
      <Problems
        nextPage="/stage_clear/2"
        correctList={[
          {
            title: '漢字(かんじ)で入力してください',
            correctText: '納豆菌',
            type: 'text',
          },
        ]}
      />
      <HintList
        HintLists={[
          {
            title: 'ヒント1',
            body: (
              <PloblempageImg img="/StageAssets/stage2/kanji-yomikata.png" />
            ),
          },
          {
            title: 'ヒント2',
            body: '国②の謎(なぞ)は時計回り(とけいまわり)を意識(いしき)してみよう',
          },
          {
            title: 'ヒント3',
            body: '納豆(なっとう)に関係(かんけい)しているよ',
          },
        ]}
      />
    </div>
  )
}

export default Home
