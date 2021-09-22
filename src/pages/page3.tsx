import { Text } from '@chakra-ui/layout'
import React from 'react'
import Problems from '~/src/components/Problems/Problems'
import CurrentLocationMap from '~/src/components/CurrentLocationMap'
import HintList from '~/src/components/HintList'
import PloblempageImg from '../components/PloblempageImg'

export const Home: React.VFC = () => {
  return (
    <div>
      <Text>
        STAGE:3
        追いつか(おいつか)れてしまった、最終(さいしゅう)手段(しゅだん)だ!
        <PloblempageImg img="/StageAssets/stage3/image16.png" />
        地図に絶対(ぜったい)押し(おし)てはいけないって書いてあるけど、もう押す(おす)しかない!
        下の画像(がぞう)の謎(なぞ)を解き(とき)、答えをキーワード欄(らん)に入力し、ボタンを押そ(おそ)う!
        困っ(こまっ)たときは、ヒントがある。なるべく見ないようにゲームを進め(すすめ)ていこう。
      </Text>{' '}
      <PloblempageImg img="/StageAssets/stage3/newMeiro.png" />
      <CurrentLocationMap img="/StageAssets/mapList/無題のプレゼンテーション_page-0003.jpg" />
      <Problems
        nextPage="/fainal"
        correctList={[
          {
            title: 'ひらがなで入力してください',
            correctText: 'れいきゃく',
            type: 'text',
          },
        ]}
      />
      <HintList
        HintLists={[
          {
            title: 'ヒント1',
            body: 'Kは2つ使うよ',
          },
          {
            title: 'ヒント2',
            body: <PloblempageImg img="/StageAssets/stage3/image4.png" />,
          },
        ]}
      />
    </div>
  )
}

export default Home
