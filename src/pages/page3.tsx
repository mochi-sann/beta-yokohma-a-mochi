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
        STAGE:3 追いつかれてしまった、最終手段だ!
        <PloblempageImg img="/StageAssets/stage3/image16.png" />
        地図に絶対押してはいけないって書いてあるけど、もう押すしかない!
        下の画像の謎を解き、答えをキーワード欄に入力し、ボタンを押そう!
        困ったときは、ヒントがある。なるべく見ないようにゲームを進めていこう。
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
